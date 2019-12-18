const express = require("express");
const cors = require("cors");

const server = express();
const port = 4000;

const login = require("./routes/login");
const newReleases = require("./routes/newReleases");

server.use(cors());
server.use(login);
server.use(newReleases);

server.listen(port, () => console.log(`API on port ${port}`));
