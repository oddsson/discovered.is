var express = require("express");
var router = express.Router();
var authOptions = require("../utils");

/* GET new releases. */
router.get("/", function(req, res, next) {
  request = require("request");

  request.post(authOptions, function(error, response, body) {
    // if (!error && response.statusCode === 200) {
    //   const token = body.access_token;
    //   const options = {
    //     url: `https://api.spotify.com/v1/browse/new-releases`,
    //     headers: {
    //       Authorization: "Bearer " + token,
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Headers": "X-Requested-With"
    //     },
    //     json: true
    //   };
    //   request.get(options, (error, response, body) => {
    //     res.json(body);
    //   });
    // }
    // console.log(body);
    // res.send(body);
    next();
  });
});

module.exports = router;
