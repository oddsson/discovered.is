const request = require("request");
const cloudinary = require("cloudinary");
require("dotenv").config();


export default function handle(req, res) {
  cloudinary.config({
    cloud_name: 'oddsson',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  })

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
        await Promise.all(
          body.albums.items.map(async(item) => {
            await cloudinary.v2.uploader.upload(
              item.images[0].url,
              {format: 'webp'},
              function(error, result) {
                item.images[0].url = result.url
              }
            )

            return item
          })
        )

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
