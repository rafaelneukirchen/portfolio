import axios from "axios";
import { useCallback, useEffect, useState, useMemo } from "react";
import * as S from "./styles";

const AboutMe: React.FC = () => {
  const [spotifyItems, setSpotifyItems] = useState([]);
  const getSpotifyPlaylist = useCallback(async (playlist_id: String) => {
    let token = import.meta.env.VITE_SPOTIFY_KEY;
    const { data } = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setSpotifyItems(data.items);
  }, []);

  useEffect(() => {
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
      <div>{Songs}</div>
    </S.AboutMe>
  );
};

export default AboutMe;
