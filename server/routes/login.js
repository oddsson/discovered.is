require("dotenv").config();
request = require("request");

const options = require("../utils");

try {
  const server = require("../lib/server");

  server.get("/server/routes/login.js", (req, res) => {
    try {
      request.post(options.authOptions, function(error, response, body) {
        res.end(
          JSON.stringify({
            token: body.access_token
          })
        );
      });
    } catch (ex) {
      console.log("API Error0", ex);
    }
  });

  module.exports = server;
} catch (ex) {
  console.log("API Error", ex);
}
