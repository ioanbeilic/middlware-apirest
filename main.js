const app = require("./src/app");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

async function main() {
  // https://github.com/Surnet/swagger-jsdoc
  const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Middleware api",
        version: "1.0.0",
        description: "api to get an map data from other api-rest",
      },
      basePath: "/api/v1",
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
      components: {
        securityDefinitions: {
          bearerAuth: {
            type: "apiKey",
            name: "x-auth-token",
            scheme: "bearer",
            in: "header",
          },
        },
      },
      security: [],
    },
    apis: ["./src/routes/*.js"], // files containing annotations
  };

  const swaggerDoc = swaggerJsDoc(swaggerOptions);
  console.log(swaggerDoc);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  // start server
  const port = process.env.PORT || 3000; // TODO - remove process.env
  app.listen(port, () => console.log(`Server on port ${port}`));
}
main();
