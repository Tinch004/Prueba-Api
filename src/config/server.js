require('dotenv').config();
const express = require("express");
const router = require("../routes"); 
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cookieParser());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

server.use(router); 

module.exports = server;