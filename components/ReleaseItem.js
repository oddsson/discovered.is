import React, { useState } from "react";
import Separator from "../public/static/icons/genre_separator.svg";
import { Chip } from "./Chip";
import LazyLoad from "react-lazyload";

// A single album
export const ReleaseItem = props => {
  const { name, artistName, img, genres, releaseType, releaseDate } = props;
  const [largeImageHasLoaded, setLargeImageHasLoaded] = useState(false);

  return (
    <div className="Card">
      <div className="CardImageWrapper">
        <span className="CardImageReleaseDate">
          {new Date(releaseDate).toLocaleDateString()}
        </span>
        <img
          src={img.thumbnail}
          alt="Release thumbnail"
          className="CardImageThumbnail"
        />
        <LazyLoad height={300}>
          <img
            src={img.img}
            alt="Release cover"
            className="CardImage"
            loading="lazy"
            onLoad={() => {
              setLargeImageHasLoaded(true);
            }}
          />
        </LazyLoad>
      </div>
      <div className="CardContent">
        <div className="AlbumInfo">
          <div>
            <div className="AlbumName">{name}</div>
            <div className="ArtistName">{artistName}</div>
          </div>
          <Chip text={releaseType} />
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
        .CardImageWrapper {
          position: relative;
          height: 300px;
        }

        .CardImage {
          opacity: ${largeImageHasLoaded ? 1 : 0};
          transition: opacity 0.3s ease-in;
        }

        .CardImage,
        .CardImageThumbnail {
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .CardImageReleaseDate {
          font-size: 12px;
          font-weight: 600;
          position: absolute;
          top: 0;
          right: 0;
          backdrop-filter: blur(50px);
          padding: 8px 16px;
          border-bottom-left-radius: 8px;
          color: white;
          letter-spacing: 1px;
          z-index: 1;
        }

        .AlbumInfo {
          display: flex;
          justify-content: space-between;
          margin-bottom: 42px;
        }

        .AlbumName {
          font-size: 20px;
          line-height: 23px;
          font-weight: 500;
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
          color: #222f3e;
        }

        .Genre .GenreSeparator {
          display: flex;
          margin: 0 8px;
        }
      `}</style>
    </div>
  );
};
