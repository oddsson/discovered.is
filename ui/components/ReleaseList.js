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
        {props.releases.albums.items.map((item, index) => {
          const genres = [];
          return (
            <Album
              key={index}
              name={item.name}
              artistId={item.artists[0].id}
              artistName={item.artists[0].name}
              albumType={item.album_type}
              imgUrl={item.images[0].url}
              genres={item.genres}
            />
          );
        })}
      </div>
      <style jsx>{`
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
