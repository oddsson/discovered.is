require("dotenv").config();
request = require("request");

const options = require("../utils");

try {
  const server = require("../lib/server");
  // TODO: Rename to newReleases
  server.get("/server/routes/newReleases.js", (req, res) => {
    try {
      request.get(
        {
          url: "https://api.spotify.com/v1/browse/new-releases?limit=50",
          headers: {
            Authorization: `Bearer ${req.query.authToken}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With"
          },
          json: true
        },
        function(error, response, body) {
          res.end(
            JSON.stringify({
              body
            })
          );
        }
      );
      module.exports = server;
    } catch (ex) {
      console.log("API Error0", ex);
    }
  });

  module.exports = server;
} catch (ex) {
  console.log("API Error", ex);
}
