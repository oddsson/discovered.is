import fetch from "isomorphic-unfetch";
import React, { useEffect } from "react";
import url from "url";
import ReleaseList from "../components/ReleaseList";
import "../styles/reset.scss";
import variables from "../styles/variables.scss";
import Head from "next/head";
import { initGA, logPageView } from '../utils/analytics'

const Home = props => (
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  <div>
    <Head>
      <title>Rediscover Spotify</title>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="../static/favicon.ico"
      />
    </Head>
    <ReleaseList releases={props.newReleases} token={props.token} />
    <style jsx>{`
      padding: 128px 160px 280px 160px;
      background-color: ${variables.mainBackgroundColor};

      @media (max-width: 1024px) {
        padding: 48px;
      }

      @media (max-width: 767px) {
        padding: 24px;
      }
    `}</style>
  </div>
);

const absoluteUrl = (req, setLocalhost) => {
  let protocol = "https";
  let host = req ? req.headers.host : window.location.hostname;
  if (host.indexOf("localhost") > -1) {
    if (setLocalhost) host = setLocalhost;
    protocol = "http";
  }

  return url.format({
    protocol,
    host,
    pathname: "/" // req.url
  });
};

Home.getInitialProps = async context => {
  const baseUrl = absoluteUrl(context.req, "localhost:3000");
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? `${baseUrl}server/routes/login.js`
      : "http://localhost:4000/server/routes/login.js";

  const response = await fetch(apiUrl);
  const responseJSON = await response.json();

  // Get new releases
  const newReleases = await fetch(
    `https://api.spotify.com/v1/browse/new-releases?limit=50`,
    {
      headers: {
        Authorization: `Bearer ${responseJSON.token}`,
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
    newReleasesJson.albums &&
      newReleasesJson.albums.items.map(async item => {
        // Get artist by ID
        const artistById = await fetch(
          `https://api.spotify.com/v1/artists/${item.artists[0].id}`,
          {
            headers: {
              Authorization: `Bearer ${responseJSON.token}`,
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
