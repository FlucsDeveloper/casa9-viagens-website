import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const waitlistSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.string().email("E-mail inválido"),
  experience_slug: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = waitlistSchema.parse(body);

    // TODO: Implement Supabase storage
    // await supabase.from('waitlists').insert({
    //   name: validatedData.name,
    //   email: validatedData.email,
    //   experience_slug: validatedData.experience_slug,
    //   created_at: new Date().toISOString(),
    // });

    // TODO: Add to MailerLite with tag: waitlist:<slug>
    // await mailerlite.subscribers.create({
    //   email: validatedData.email,
    //   fields: { name: validatedData.name },
    //   groups: [`waitlist:${validatedData.experience_slug}`],
    // });

    console.log("📋 Waitlist signup:", {
      name: validatedData.name,
      experience: validatedData.experience_slug,
    });

    return NextResponse.json(
      {
        ok: true,
        message:
          "Você foi adicionado à lista de espera! Avisaremos quando houver novidades.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          ok: false,
          message: error.issues[0].message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        ok: false,
        message: "Erro ao cadastrar. Tente novamente.",
      },
      { status: 500 }
    );
  }
}
