import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, contact, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Contact: ${contact}
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err: any) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
