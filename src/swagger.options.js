// https://github.com/Surnet/swagger-jsdoc
export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Middleware api",
      version: "1.0.0",
      description: "api to get an map data from other api-rest",
    },
    basePath: "/api",
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
    components: {
      schemas: {
        Error: {
          type: "object",
          required: ["code", "message"],
          properties: {
            code: {
              type: "integer",
              format: "int32",
            },
            message: {
              type: "string",
            },
          },
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/routes/*.js"], // files containing annotations
};
