"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const prisma_1 = require("../../lib/prisma");
const getUsers = async (_req, res) => {
    const users = await prisma_1.prisma.user.findMany({
        include: {
            orders: true,
        },
    });
    res.json({ users });
};
exports.getUsers = getUsers;
