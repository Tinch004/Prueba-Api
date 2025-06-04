require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require("fs");
const path = require("path");
const { SERIALIZABLE } = require("sequelize/lib/table-hints");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY, DB_PORT } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DEPLOY}`, {
  logging: false,
  native: false,
  dialectOptions: {

  },
});
console.log(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:${DB_HOST}/${DB_DEPLOY}`);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "../models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "../models", file)));
  });

modelDefiners.forEach((modelDefiner) => {
  if (typeof modelDefiner === "function") {
    modelDefiner(sequelize);
  }
});

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

module.exports = {
  ...sequelize.models, 
  conn: sequelize, 
  Sequelize
};