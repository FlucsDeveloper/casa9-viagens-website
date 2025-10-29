import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("E-mail inválido"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consentimento é obrigatório",
  }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = newsletterSchema.parse(body);

    // TODO: Implement Supabase storage
    // await supabase.from('leads').insert({
    //   email: validatedData.email,
    //   consent: validatedData.consent,
    //   source: 'newsletter',
    //   created_at: new Date().toISOString(),
    // });

    // TODO: Implement MailerLite/Brevo double opt-in
    // await mailerlite.subscribers.create({
    //   email: validatedData.email,
    //   status: 'unconfirmed', // Requires double opt-in
    // });

    console.log("📧 Newsletter signup:", validatedData.email);

    return NextResponse.json(
      {
        ok: true,
        message:
          "Cadastrado! Verifique seu e-mail para confirmar (double opt-in).",
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
