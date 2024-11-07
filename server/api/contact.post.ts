import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: Number(config.smtp.port),
    secure: false,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
  });

  try {
    const body = await readBody(event);

    // Check honeypot field
    if (body.website) {
      // If honeypot is filled, silently reject without error
      return { success: true, message: "Email sent successfully" };
    }

    // Validate input
    if (!body.email || !body.message) {
      throw new Error("Email and message are required");
    }

    // Send email
    await transporter.sendMail({
      from: body.email,
      to: "mathis.perrier73@gmail.com",
      subject: `[WathisWebsite] New Contact Form Message from ${body.name || "Anonymous"}`,
      text: `
                Name: ${body.name || "Not provided"}
                Email: ${body.email}

                Message:
                ${body.message}
            `,
    });

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Email error:", error);
    return createError({
      statusCode: 500,
      statusMessage: "Failed to send email",
    });
  }
});
