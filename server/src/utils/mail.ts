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

import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());
const PORT = 8000;

const sendMail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
  });
  await transporter.sendMail({
    from: process.env.AUTH_EMAIL,
    to,
    subject,
    html,
  });
};

app.get("/send-mail", async (_req, res) => {
  const recipient = process.env.AUTH_EMAIL;
  console.log("Sending mail to:", recipient);
  const html = `
<div
  style="
    width: 400px;
    height: 300px;
    background-color: aqua;
    border-radius: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  "
>
  Food delivery
</div>
 `;
  await sendMail(recipient as string, "Food Delivery Test", html);
  res.send({ message: "Mail sent" });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT}`);
});

export { sendMail };
