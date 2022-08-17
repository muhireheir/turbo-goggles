"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
const dotenv_1 = __importDefault(require("dotenv"));
const nodemailer_1 = __importDefault(require("nodemailer"));
dotenv_1.default.config();
const emailController = {
    sendEmail: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, subject, message } = req.body;
        const transporter = nodemailer_1.default.createTransport({
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
    }),
};
exports.default = emailController;
