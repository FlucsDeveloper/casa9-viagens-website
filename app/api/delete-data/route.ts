import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const deleteDataSchema = z.object({
  email: z.string().email("E-mail inválido"),
  reason: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = deleteDataSchema.parse(body);

    // TODO: Implement double confirmation via email
    // Generate unique token
    // const token = jwt.sign(
    //   { email: validatedData.email, action: 'delete' },
    //   process.env.JWT_SECRET,
    //   { expiresIn: '24h' }
    // );

    // TODO: Send confirmation email
    // await resend.emails.send({
    //   from: 'Casa 9 Viagens <privacidade@casa9viagens.com>',
    //   to: validatedData.email,
    //   subject: 'Confirme a exclusão dos seus dados',
    //   html: `
    //     <p>Clique para confirmar a exclusão:</p>
    //     <a href="${process.env.NEXT_PUBLIC_SITE_URL}/confirm-delete/${token}">Confirmar Exclusão</a>
    //     <p>Este link é válido por 24 horas.</p>
    //   `
    // });

    // TODO: After confirmation, delete from all sources:
    // - Supabase (leads, contacts, bookings, waitlists)
    // - MailerLite/Brevo (unsubscribe + delete)
    // - Google Calendar (cancel future events)

    // TODO: Log deletion request for compliance
    // await supabase.from('deletion_requests').insert({
    //   email: validatedData.email,
    //   reason: validatedData.reason,
    //   status: 'pending_confirmation',
    //   requested_at: new Date().toISOString(),
    // });

    console.log("🗑️  Data deletion requested:", validatedData.email);

    return NextResponse.json(
      {
        ok: true,
        message:
          "Solicitação recebida! Você receberá um e-mail de confirmação.",
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
        message: "Erro ao processar. Tente novamente.",
      },
      { status: 500 }
    );
  }
}
