"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = void 0;
const prisma_1 = require("../../lib/prisma");
const getOrders = async (req, res) => {
    try {
        const order = await prisma_1.prisma.foodOrder.findMany({
            include: {
                foodOrderItems: true,
            },
        });
        res.json({ order });
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
};
exports.getOrders = getOrders;
