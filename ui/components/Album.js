import React from "react";
import Separator from "../static/icons/genre_separator.svg";

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
      <div className="CardImage" />
      <div className="CardContent">
        <div className="AlbumInfo">
          <div className="AlbumName">{name}</div>
          <div className="ArtistName">{artistName}</div>
        </div>
      </div>
      <div className="AlbumGenres">
        {genres && genres.length > 0 ? (
          genres.map((genre, index) => (
            <span key={index} className="Genre">
              {genre}
              {index + 1 !== genres.length && (
                <span className="GenreSeparator">
                  <Separator />
                </span>
              )}
            </span>
          ))
        ) : (
          <span area-label="Notes emoji">🎶</span>
        )}
      </div>
      <style jsx>{`
        .CardImage {
          background-image: url(${imgUrl});
          background-size: 100% 100%;
          background-repeat: no-repeat;
          padding-top: 100%; /* 1:1 Aspect Ratio */
        }

        .AlbumInfo {
          margin-bottom: 42px;
        }

        .AlbumName {
          font-size: 20px;
          line-height: 23px;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .ArtistName {
          font-size: 16px;
        }

        .AlbumGenres {
          background-color: #fafafa;
          padding: 24px 28px;
        }

        a.CardArtistName:hover {
          color: #333;
        }

        .child {
          overflow: hidden;
          border-radius: 3px;
        }

        .Card {
          display: flex;
          flex-direction: column;
          background-color: white;
          box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.1);
          color: #1e272e;
        }

        .Card img {
          width: 352px;
        }

        .Card .CardContent {
          flex-grow: 1;
          padding: 16px;
        }

        .Genre {
          display: inline-flex;
          align-items: center;
          font-size: 12px;
          letter-spacing: 0.02em;
          text-transform: capitalize;
          color: #adadad;
        }

        .Genre .GenreSeparator {
          display: flex;
          margin: 0 8px;
        }
      `}</style>
    </div>
  );
}

export default Album;
