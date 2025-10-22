import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Define validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  destination: z.string().optional(),
  experience_type: z.string().optional(),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // For now, just return success response
    // TODO: Integrate with Resend when API key is provided
    // const response = await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     from: "Casa 9 Viagens <onboarding@resend.dev>",
    //     to: validatedData.email,
    //     replyTo: "contato@casa9viagens.com",
    //     subject: "Recebemos sua mensagem - Casa 9 Viagens",
    //     html: `
    //       <h2>Obrigado pelo seu interesse, ${validatedData.name}!</h2>
    //       <p>Recebemos sua mensagem e entraremos em contato em breve.</p>
    //     `,
    //   }),
    // });

    // TODO: Implement proper logging and database storage in production

    return NextResponse.json(
      {
        success: true,
        message:
          "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao enviar mensagem. Tente novamente.",
      },
      { status: 500 }
    );
  }
}
