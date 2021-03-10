require("dotenv").config();
var request = require("request");

const options = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " +
      new Buffer(
        `7b9acfdba21441618ee2676a28114f10:dff09d2fa58349729f0bbc6add668deb`
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
