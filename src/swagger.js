const dotenv = require('dotenv');
dotenv.config();
const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "AirBnB Clone Project",
    description:
        "당신의 방을 자랑하세요",
  },
  host: `${process.env.SWAGGER_PORT}/api`,
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
];

swaggerAutogen(outputFile, endpointsFiles, doc);