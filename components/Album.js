import React from "react";

/**
 * A single album.
 * @param {string} name
 * @param {string} artistId
 * @param {string} artistName
 * @param {string} imgUrl
 */
function Album(props) {
  const { name, imgUrl, artistName, genres } = props;
  return (
    <div className="Card">
      <img src={imgUrl} alt={name} />
      <div className="CardContent">
        <div className="AlbumInfo">
          <div className="AlbumName">{name}</div>
          <div className="ArtistName">{artistName}</div>
        </div>
      </div>
      <div className="AlbumGenres">
        {genres && genres.map(genre => <span>{genre}</span>)}
      </div>
    </div>
  );
}

export default Album;
