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
      <div className="grid">
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
    </div>
  );
};

export default ReleasesList;
