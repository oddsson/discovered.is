var request = require("request");

export default function handle(req, res) {
  try {
    request.get(
      {
        url: `https://api.spotify.com/v1/artists/${req.query.artistId}`,
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
  } catch (ex) {
    console.log("Failed to get artist from Spotify API", ex);
  }
}
