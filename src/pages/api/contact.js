import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  const { name, email, phone, serviceType } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    logger: true,
    debug: true,
    tls: {
      rejectUnauthorized: false,
    },
  });

  const clientEmail = "guntupallinagasrija@gmail.com";

const mailOptionsUser = {
  from: process.env.EMAIL_USER,
  to: email,
  subject: "Service Request Confirmation",
  html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <img src="https://vi-design-studiz-vinay-nitins-projects-a10f7267.vercel.app/logo.png" alt="Service Request" style="max-width: 100%; height: auto;">
      <h2>Hello ${name},</h2>
      <p>Thank you for requesting <strong>${serviceType}</strong>. We will contact you at <strong>${phone}</strong> soon.</p>
      <p>Best regards,<br>VI Design Studioz</p>
    </div>
  `,
};


  const mailOptionsClient = {
    from: process.env.EMAIL_USER,
    to: clientEmail,
    subject: "New Service Request",
    text: `New service request received:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService Type: ${serviceType}`,
  };

  try {
    await transporter.sendMail(mailOptionsUser);
    await transporter.sendMail(mailOptionsClient);
    res.status(200).json({ message: "Emails sent successfully." });
  } catch (error) {
    console.error("Email sending error:", error);
    res
      .status(500)
      .json({ error: "Failed to send emails.", details: error.message });
  }
}
