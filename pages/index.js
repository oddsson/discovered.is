import fetch from "isomorphic-unfetch";
import React from "react";
import ReleaseList from "../components/ReleaseList";

const Home = props => (
  <div>
    <ReleaseList releases={props.newReleases} token={props.token} />
    <style jsx>{``}</style>
  </div>
);

Home.getInitialProps = async ({ req, res }) => {
  console.log(res);
  // Get new releases
  const newReleases = await fetch(
    `https://api.spotify.com/v1/browse/new-releases?country=SE`,
    {
      headers: {
        Authorization: `Bearer ${res.get("token")}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With"
      },
      json: true
    }
  );

  // Convert newReleases to JSON
  const newReleasesJson = await newReleases.json();

  // For each new release, get the artist and append it's genre to it.
  await Promise.all(
    newReleasesJson.albums.items.map(async item => {
      // Get artist by ID
      const artistById = await fetch(
        `https://api.spotify.com/v1/artists/${item.artists[0].id}`,
        {
          headers: {
            Authorization: `Bearer ${res.get("token")}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With"
          },
          json: true
        }
      );

      // Convert artist to JSON
      const artistByIdJSON = await artistById.json();
      item.genres = artistByIdJSON.genres;

      return item;
    })
  );

  return {
    newReleases: newReleasesJson
  };
};

export default Home;
