import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const leadMagnetSchema = z.object({
  email: z.string().email("E-mail inválido"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consentimento é obrigatório",
  }),
  source: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = leadMagnetSchema.parse(body);

    // TODO: Implement rate limiting (3 requests/hour)
    // TODO: Implement reCAPTCHA v3 verification

    // TODO: Implement Supabase storage
    // await supabase.from('lead_magnets').insert({
    //   email: validatedData.email,
    //   consent: validatedData.consent,
    //   source: validatedData.source || 'popup',
    //   created_at: new Date().toISOString(),
    // });

    // TODO: Generate signed token (valid for 7 days)
    // const token = jwt.sign(
    //   { email: validatedData.email },
    //   process.env.JWT_SECRET,
    //   { expiresIn: '7d' }
    // );

    // TODO: Send email with download link
    // await resend.emails.send({
    //   from: 'Casa 9 Viagens <ebooks@casa9viagens.com>',
    //   to: validatedData.email,
    //   subject: 'Seu Guia Casa 9 chegou!',
    //   html: `<p>Clique para baixar: <a href="${process.env.NEXT_PUBLIC_SITE_URL}/api/ebook/${token}">Download</a></p>`
    // });

    console.log("📚 E-book requested:", validatedData.email);

    return NextResponse.json(
      {
        ok: true,
        message: "E-book enviado! Verifique sua caixa de entrada.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          ok: false,
          error: error.issues[0].message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        ok: false,
        error: "Erro ao processar. Tente novamente.",
      },
      { status: 500 }
    );
  }
}
