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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const database_config_1 = __importDefault(require("./config/database.config"));
const User_1 = require("./models/User");
const Bcrypt_1 = __importDefault(require("./helpers/Bcrypt"));
dotenv_1.default.config();
database_config_1.default.authenticate({
    logging: false,
}).then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield database_config_1.default.sync();
    const hasAdmin = yield User_1.User.findOne({ where: { role: 'ADMIN' } });
    if (!hasAdmin) {
        yield User_1.User.bulkCreate([
            {
                firstName: 'John',
                lastName: 'Doe',
                password: Bcrypt_1.default.hashPassword('admin123'),
                role: 'ADMIN',
                email: 'admin@shecancode.com',
            },
        ]);
    }
}));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: true }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', routes_1.default);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app runing on port ${port}`);
});
