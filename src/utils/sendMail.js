import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

console.log('SMTP HOST:', process.env.SMTP_HOST);
console.log('SMTP PORT:', process.env.SMTP_PORT);
console.log('SMTP USER:', process.env.SMTP_USER);

export const sendEmail = async (options) => {
  try {
    const info = await transporter.sendMail(options);

    console.log('EMAIL SENT:', info);
    return info;
  } catch (error) {
    console.error('EMAIL ERROR:', error);
    throw error;
  }
};