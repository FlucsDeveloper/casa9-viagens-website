import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().optional(),
  message: z.string().optional(),
  experience_slug: z.string(), // CONTEXTUAL
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // TODO: Implement Supabase storage
    // await supabase.from('contacts').insert({
    //   name: validatedData.name,
    //   email: validatedData.email,
    //   phone: validatedData.phone,
    //   message: validatedData.message,
    //   experience_slug: validatedData.experience_slug,
    //   created_at: new Date().toISOString(),
    // });

    // TODO: Send email to admin with experience context
    // await resend.emails.send({
    //   from: 'Casa 9 Viagens <contato@casa9viagens.com>',
    //   to: 'admin@casa9viagens.com',
    //   subject: `Interesse em: ${validatedData.experience_slug}`,
    //   html: emailTemplate,
    // });

    console.log("💬 Contact with context:", {
      name: validatedData.name,
      experience: validatedData.experience_slug,
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Mensagem enviada! Retornaremos em breve.",
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
        message: "Erro ao enviar. Tente novamente.",
      },
      { status: 500 }
    );
  }
}
