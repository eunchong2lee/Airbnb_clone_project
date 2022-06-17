const dotenv = require('dotenv');
dotenv.config();
const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "AirBnB Clone Project",
    description:
        "여행은 살아보는거야",
  },
  host: `${process.env.SWAGGER_PORT}/api`,
  schemes: ["http"],
};

const outputFile = "src/swagger-output.json";
const endpointsFiles = [
  "src/routes/userroutes.js"
];

swaggerAutogen(outputFile, endpointsFiles, doc);