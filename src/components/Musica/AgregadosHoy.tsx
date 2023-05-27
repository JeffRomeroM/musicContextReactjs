import { useContext } from "react";
import { MusicContext } from "../../context/MusicContext";

export const AgregadosHoy = () => {
  const { music, play, cambiarMusica }:any = useContext(MusicContext);

  const hoy = {

    backgroundColor: 'green',
    padding: 5
   
  }
  return (
    <div style={hoy}>
      <h2>Musicas agregadas hoy</h2>
  
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
