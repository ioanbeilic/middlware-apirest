import express, { json } from "express";
import cors from "cors";

// routes
import AuthRoutes from "./routes/auth.routes.js";
import ClientRoutes from "./routes/client.routes.js";
import PolicyRoutes from "./routes/policy.routes.js";

const app = express();
app.use(cors());
app.use(json());

app.locals.api_token = "";
app.locals.clientsETag = "";
app.locals.policiesETag = "";

app.use("/api", AuthRoutes);
app.use("/api/clients", ClientRoutes);
app.use("/api/policies", PolicyRoutes);

// Your own super cool function
const logger = function (req, res, next) {
  //  console.log(req);
  next(); // Passing the request to the next handler in the stack.
};

app.use(logger); // Here you add your logger to the stack.

export default app;
