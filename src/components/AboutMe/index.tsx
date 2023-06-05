import * as S from "./styles";
import { useInView } from "react-intersection-observer";

const AboutMe: React.FC = () => {
  // const [spotifyItems, setSpotifyItems] = useState([]);
  // const selectRef = useRef(null);
  // const getSpotifyPlaylist = useCallback(async (playlist_id: String) => {
  //   let token = import.meta.env.VITE_SPOTIFY_KEY;
  //   const { data } = await axios.get(
  //     `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
  //     { headers: { Authorization: `Bearer ${token}` } }
  //   );

  //   setSpotifyItems(data.items);
  // }, []);

  // useEffect(() => {
  //   const select = document.querySelector("select");
  //   if (select) {
  //     select.addEventListener("change", () => {
  //       getSpotifyPlaylist(select.value);
  //     });
  //   }
  //   getSpotifyPlaylist("6joiaX8Wua8CGZO2vq3JTi");
  // }, [getSpotifyPlaylist]);

  // const Songs = useMemo(() => {
  //   if (spotifyItems.length > 0) {
  //     const allSongs = spotifyItems.map((item: any) => {
  //       return <div>{item.track.name}</div>;
  //     });
  //     return allSongs;
  //   }
  //   return;
  // }, [spotifyItems]);

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <S.AboutMe>
      <S.Parallax>
        <S.ParallaxCourtain />
        <S.ParallaxContent id="sobre">
          <S.Content>
            <S.Profile>
              <S.Picture>
                <img src="./imageOfMine.jpg"></img>
                <S.ShortDescription>
                  <h3>Rafael Neukirchen</h3>
                  <p>💍 - Casado</p>
                  <p>🛹 - Skatista</p>
                  <p>👨‍🍳 - Cozinheiro</p>
                  <p>🐈 - Pai de Pet</p>
                  <p>🎮 - Gamer</p>
                  <p>💻 - Desenvolvedor</p>
                  <p style={{ marginTop: "24px" }}>
                    <i>404 bugs resolvidos</i>
                  </p>
                </S.ShortDescription>
              </S.Picture>
              <S.Description>
                <h3 style={{ marginTop: "24px" }}>Gaming</h3>
                <p>
                  <span className="gold">Ouro 1</span> no League of Legends
                </p>
                <p>
                  <span className="platinum">Platina 3</span> no Team Fight
                  Tactics
                </p>
                <p>
                  <span className="gold">Ouro 2</span> no CS:GO
                </p>
                <p>
                  <span className="platinum">Platina 4</span> em Apex Legends
                </p>
                <p>
                  MMORPG <span className="red">Lover</span> (Diablo 4, World of
                  Warcraft)
                </p>
                <p>
                  Minecraft <span className="red">Lover ❤</span>
                </p>
                <h3 style={{ marginTop: "24px" }}>Setup</h3>
                <p>PRIME A320M-K - ASUS</p>
                <p>AMD Ryzen 3 3200G</p>
                <p>2x8gb 3200MHz Ballistix</p>
                <p>GeForce GTX 660 TI</p>
                <p>ADATA SU630 240gb SSD</p>
              </S.Description>
              <S.Song>
                <h3 style={{ marginTop: "24px" }}>Música-tema</h3>
              </S.Song>
            </S.Profile>
            <S.Spotify />
            <S.Hobbies />
            <S.Something />
            <S.Religion />
            <S.Instagram />
          </S.Content>
        </S.ParallaxContent>
      </S.Parallax>

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
