import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  duration: z.enum(["15", "30"]),
  preferred_date: z.string(),
  preferred_time: z.string(),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = bookingSchema.parse(body);

    // TODO: Implement Supabase storage
    // await supabase.from('bookings').insert({
    //   name: validatedData.name,
    //   email: validatedData.email,
    //   phone: validatedData.phone,
    //   duration: parseInt(validatedData.duration),
    //   preferred_date: validatedData.preferred_date,
    //   preferred_time: validatedData.preferred_time,
    //   message: validatedData.message,
    //   status: 'pending',
    //   created_at: new Date().toISOString(),
    // });

    // TODO: Implement Google Calendar API
    // const event = {
    //   summary: `Conversa com ${validatedData.name}`,
    //   description: validatedData.message,
    //   start: {
    //     dateTime: `${validatedData.preferred_date}T${validatedData.preferred_time}:00`,
    //     timeZone: 'America/Sao_Paulo',
    //   },
    //   end: {
    //     dateTime: // Add duration to start time
    //   },
    //   attendees: [{ email: validatedData.email }],
    // };
    // await calendar.events.insert({ calendarId: 'primary', resource: event });

    // TODO: Send confirmation email
    // await resend.emails.send({
    //   from: 'Casa 9 Viagens <contato@casa9viagens.com>',
    //   to: validatedData.email,
    //   subject: 'Seu agendamento está confirmado!',
    //   html: confirmationEmailTemplate,
    // });

    console.log("📅 Booking request:", {
      name: validatedData.name,
      date: validatedData.preferred_date,
      time: validatedData.preferred_time,
    });

    return NextResponse.json(
      {
        ok: true,
        message:
          "Agendamento recebido! Você receberá um e-mail de confirmação em breve.",
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
        message: "Erro ao agendar. Tente novamente.",
      },
      { status: 500 }
    );
  }
}
