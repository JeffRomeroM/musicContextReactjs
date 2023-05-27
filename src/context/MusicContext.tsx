import { createContext, useState } from "react";

export const MusicContext = createContext({});

export const MusicContextProvider = ({ children }: any) => {

  const play = () => {
    alert("Reproduciendo: "+ music.name + " de: " + music.artist);
  };

  const cambiarMusica = () => {
   
    setMusic({
      name: "Luna",
      artist: "Indiomar",
      duration: "4 minutos",
    });

  };

  const [music, setMusic] = useState({
    name: "Cuando yo te conoci",
    artist: "Alex Zurdo",
    duration: "3 minutos",
  });



  return (
    <MusicContext.Provider
      value={{
        // estado
        music,

        // funciones
        setMusic,
        play,
        cambiarMusica,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
