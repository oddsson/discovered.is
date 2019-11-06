import Album from "./Album";
/**
 * A list of new releases on Spotify.
 */
const ReleasesList = props => {
  return (
    <div className="App">
      <div className="Title">
        <h1>Spotify New Releases</h1>
        <h2>The newest music as it’s released</h2>
      </div>
      <div className="Grid">
        {props.releases.albums.items
          .sort((a, b) => {
            // TODO: if day is missing, set thet day to the last day of the month
            return new Date(b.release_date) - new Date(a.release_date);
          })
          .map((item, index) => {
            return (
              <a key={index} href={item.uri} rel="noopener">
                <Album
                  name={item.name}
                  artistId={item.artists[0].id}
                  artistName={item.artists[0].name}
                  albumType={item.album_type}
                  img={{
                    img: item.images[0].url,
                    thumbnail: item.images[2].url
                  }}
                  genres={item.genres}
                />
              </a>
            );
          })}
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
        }

        .Title h1 {
          font-weight: 700;
        }

        .Title h2 {
          font-weight: 400;
        }

        .Grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 32px;
        }

        @media (max-width: 1024px) {
          .Grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .Grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default ReleasesList;
