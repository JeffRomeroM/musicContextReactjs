import { useContext } from "react";
import { MusicContext } from "../../context/MusicContext";

export const MasReproducidas = () => {
  let { music, play, cambiarMusica }:any = useContext(MusicContext);
  const mas = {

    backgroundColor: 'orange',
    padding: 5
  }

  return (
    <div style={mas}>
      <h1>Mas reproducidas</h1>
    
      <h3>
        Nombre: {music.name} 
      </h3>
      <h4>
        Artista: {music.artist}
      </h4>
      <h5>
        Duracion: {music.duration}
      </h5>

      <button onClick={play}>Reproducir</button>
      <button onClick={cambiarMusica}>Cambiar Musica</button>
    </div>
  );
};
