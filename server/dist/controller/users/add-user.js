"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const prisma_1 = require("../../lib/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const addUser = async (req, res) => {
    const { email, password, age, phoneNumber } = req.body;
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    try {
        const user = await prisma_1.prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                age,
                phoneNumber,
            },
        });
        res.json({ user });
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
};
exports.addUser = addUser;
// if(hashed data === original data) {
//  // valid password
// }
