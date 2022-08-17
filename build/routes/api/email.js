"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emailsController_1 = __importDefault(require("../../controllers/emailsController"));
const { sendEmail } = emailsController_1.default;
const router = express_1.default.Router();
router.post('/', sendEmail);
exports.default = router;
