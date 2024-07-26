import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json(); 

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.TO_USER,
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    const response = await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

