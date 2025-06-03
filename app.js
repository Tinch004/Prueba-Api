require('dotenv').config();
const server = require("./src/config/server");
const { conn } = require("./src/config/db.js");
const PORT = 3001;
const routes = require('./src/routes/index.js');
server.use("/", routes);

conn
	.sync({ alter: true })
	.then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));  