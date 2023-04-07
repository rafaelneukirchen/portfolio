import axios from "axios";
import { useCallback, useEffect, useState, useMemo, useRef } from "react";
import * as S from "./styles";

const AboutMe: React.FC = () => {
  const [spotifyItems, setSpotifyItems] = useState([]);
  const selectRef = useRef(null);
  const getSpotifyPlaylist = useCallback(async (playlist_id: String) => {
    let token = import.meta.env.VITE_SPOTIFY_KEY;
    const { data } = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setSpotifyItems(data.items);
  }, []);

  useEffect(() => {
    const select = document.querySelector("select");
    if (select) {
      select.addEventListener("change", () => {
        getSpotifyPlaylist(select.value);
      });
    }
    getSpotifyPlaylist("6joiaX8Wua8CGZO2vq3JTi");
  }, [getSpotifyPlaylist]);

  const Songs = useMemo(() => {
    if (spotifyItems.length > 0) {
      const allSongs = spotifyItems.map((item: any) => {
        return <div>{item.track.name}</div>;
      });
      return allSongs;
    }
    return;
  }, [spotifyItems]);

  return (
    <S.AboutMe id="sobre">
      {/* <select ref={selectRef}>
        <option value={"5AhaPnGZJaeJNgkLzPnUqm"}>
          bbno$, Yung, Roddy, Posty and every pop shit
        </option>
        <option value={"6joiaX8Wua8CGZO2vq3JTi"}>PEDRA</option>
      </select>
      <div>{Songs}</div> */}
    </S.AboutMe>
  );
};

export default AboutMe;
