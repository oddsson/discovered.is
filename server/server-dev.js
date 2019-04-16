const express = require("express");
const cors = require("cors");

const server = express();
const port = 4000;

const api = require("./routes/login");

server.use(cors());
server.use(api);

server.listen(port, () => console.log(`API on port ${port}`));
