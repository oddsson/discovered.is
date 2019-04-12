import React from "react";
import ReleaseList from "../components/ReleaseList";

const Home = props => (
  <div>
    <ReleaseList releases={props.newReleases} />
    <style jsx>{``}</style>
  </div>
);

Home.getInitialProps = async function() {
  const res = await fetch("http://localhost:3000/new-releases");
  const data = await res.json();

  return {
    newReleases: data
  };
};

export default Home;
