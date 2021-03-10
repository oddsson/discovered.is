require("dotenv").config();
var request = require("request");

const options = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " +
      new Buffer(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64"),
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
  },
  form: {
    grant_type: "client_credentials",
  },
  json: true,
};

export default function handle(req, res) {
  try {
    request.post(options, function (error, response, body) {
      res.end(
        JSON.stringify({
          token: body.access_token,
        })
      );
    });
  } catch (ex) {
    console.log("Failed to authenticate with Spotify API.", ex);
  }
}
