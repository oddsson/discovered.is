module.exports = {
  authOptions: {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(
          process.env.SPOTIFY_CLIENT_ID +
            ":" +
            process.env.SPOTIFY_CLIENT_SECRET
        ).toString("base64"),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With"
    },
    form: {
      grant_type: "client_credentials"
    },
    json: true
  },
  newReleasesOptions: {
    url: "https://api.spotify.com/v1/browse/new-releases?limit=50",
    headers: {
      Authorization: `Bearer ${new Buffer(
        process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET
      ).toString("base64")}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With"
    },
    json: true
  }
  // authOptions: {
  //   url: "https://accounts.spotify.com/api/token",
  //   headers: {
  //     Authorization:
  //       "Basic " +
  //       new Buffer(
  //         process.env.SPOTIFY_CLIENT_ID +
  //           ":" +
  //           process.env.SPOTIFY_CLIENT_SECRET
  //       ).toString("base64"),
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers": "X-Requested-With"
  //   },
  //   form: {
  //     grant_type: "client_credentials"
  //   },
  //   json: true
  // },
  // newReleasesOptions: {
  //   url: "https://api.spotify.com/v1/browse/new-releases?limit=50",
  //   headers: {
  //     Authorization: `Bearer ${new Buffer(
  //       process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET
  //     ).toString("base64")}`,
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers": "X-Requested-With"
  //   },
  //   json: true
  // }
};
