/* eslint-disable no-unused-vars */
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { Request, Response } from 'express';

dotenv.config();

const emailController = {
  sendEmail: async (req:Request, res:Response) => {
    const { email, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.yahoo.com',
      port: 465,
      service: 'yahoo',
      secure: false,
      debug: true,
      logger: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject,
      html: message,
    };
    console.log(mailOptions);

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.status(500).json({
          message: 'Error sending email',
          status: 500,
          error: err,
        });
      }
      console.log(info);
      return res.status(200).json({
        message: 'Email sent successfully',
        status: 200,
      });
    });
  },

};
export default emailController;
