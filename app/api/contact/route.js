import Email from "@/emails/welcome";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.API_KEY);

export async function POST(req) {
  const formData = await req.json();
  try {
    console.log("formData received: ", formData);
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "trovatracking@gmail.com",
      replyTo: formData.email,
      subject: "Tracking worries",
      react: Email({ formData }),
    });
    return NextResponse.json(
      { message: "Message sent successfully. We will be in touch with you." },
      { status: 201 }
    );
  } catch (err) {
    console.log("Error sending email: ", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 501 }
    );
  }
}
