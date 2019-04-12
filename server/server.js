require('dotenv').config()
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const newReleases = require("./routes/newReleases");
const genreByArtist = require("./routes/genreByArtist");

app
  .prepare()
  .then(() => {
    const server = express();
    server.use("/new-releases", newReleases);
    server.use("/artist/:id", genreByArtist);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
