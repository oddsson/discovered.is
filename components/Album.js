import fetch from "isomorphic-unfetch";
import { useEffect, useState } from "react";

/**
 * A single album.
 * @param {string} name
 * @param {string} artistId
 * @param {string} artistName
 * @param {string} imgUrl
 */
export const Album = ({
  name,
  artistId,
  artistName,
  albumType,
  imgUrl,
  albumUri
}) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/artist/${artistId}`);
      const d = await res.json();

      setData(d);
    };
    fetchData();
  }, []);
  console.log(data);
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
        {data && data.map((genre, index) => <span>{genre}</span>)}
      </div>
    </div>
  );
};

export default Album;
