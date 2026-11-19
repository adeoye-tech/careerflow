
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    // Check email configuration
    if (!apiKey || !contactEmail) {
      console.error("Missing Resend environment variables.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const { name, email, enquiry, subject, message } = body;

    // Validate required fields
    if (
      !name ||
      !email ||
      !enquiry ||
      !subject ||
      !message
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 }
      );
    }

    // Initialize Resend when the API is called
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "CareerFlow Contact <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `CareerFlow Enquiry: ${subject}`,
      text: `
New contact form submission

Name: ${name}
Email: ${email}
Enquiry Type: ${enquiry}
Subject: ${subject}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
