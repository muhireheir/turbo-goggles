"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./user"));
const class_1 = __importDefault(require("./class"));
const course_1 = __importDefault(require("./course"));
const router = express_1.default.Router();
router.use('/users', user_1.default);
router.use('/class', class_1.default);
router.use('/courses', course_1.default);
exports.default = router;
