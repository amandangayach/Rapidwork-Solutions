import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const body = schema.parse(json)

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${body.name}`,
      text: `
        Name: ${body.name}
        Email: ${body.email}
        Phone: ${body.phone || 'Not provided'}
        Message: ${body.message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    )
  }
}
