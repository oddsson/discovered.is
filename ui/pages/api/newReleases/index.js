const request = require("request");
require("dotenv").config();

export default function handle(req, res) {
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
      async function(error, response, body) {
        res.end(
          JSON.stringify({
            body
          })
        );
      }
    );
  } catch (ex) {
    console.log("Failed to get new releases from Spotify API", ex);
  }
}
