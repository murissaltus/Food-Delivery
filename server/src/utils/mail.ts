// import nodemailer from "nodemailer";
// import { configDotenv } from "dotenv";

// configDotenv();

// const { AUTH_EMAIL, AUTH_PASS } = process.env;

// const transport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: AUTH_EMAIL,
//     pass: AUTH_PASS,
//   },
// });

// export const verifyUserEmail = async (receiver: string, VerifyLink: string) => {
//   await transport.sendMail({
//     from: `"Food Delivery ${AUTH_EMAIL}`,
//     to: receiver,
//     subject: "Verify user",
//     html: `
//     <div
//       style="
//       width: 400px;
//       height: 320px;
//       border-radius: 8px;
//       background-color: beige;
//       "
//       >
//       <a href="${VerifyLink}" target="_blank" style="font-size: 12px; color: black">Verify User</a>
//     </div>
//     `,
//   });
// };

import nodemailer from "nodemailer";

export const sendMail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Food App" <${process.env.MAIL_USER}>`,
    to,
    subject,
    html,
  });
};
