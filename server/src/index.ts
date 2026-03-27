import express from "express";
import usersRouter from "./router/users.router";
import ordersRouter from "./router/orders.router";
import categoryRouter from "./router/category.router";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);
app.use("/orders", ordersRouter);
app.use("/categories", categoryRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
