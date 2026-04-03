"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_router_1 = __importDefault(require("./router/users.router"));
const orders_router_1 = __importDefault(require("./router/orders.router"));
const category_router_1 = __importDefault(require("./router/category.router"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => res.send("Hello"));
app.use("/users", users_router_1.default);
app.use("/orders", orders_router_1.default);
app.use("/categories", category_router_1.default);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
