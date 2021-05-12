import "@babel/polyfill";
// swagger
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
// app
import app from "./app";
import { swaggerOptions } from "./swagger.options";

import dotenv from 'dotenv'

async function main() {
  dotenv.config()
  const swaggerDoc = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

  // start server
  const port = process.env.PORT || 3000; // TODO - remove process.env
  await app.listen(port);
  console.log(`Server on port ${port}`);
}

main();
