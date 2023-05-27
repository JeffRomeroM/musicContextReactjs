
import { AgregadosReciente } from "../components/Musica/AgregadosReciente"
import { MasReproducidas } from "../components/Musica/MasReproducidas"
import { MusicasFavoritas } from "../components/Musica/MusicasFavoritas"


export const MusicaPage = () => {
const musicPages = {

  display: 'flex',
  flexWrap: 'no-wrap',
  gap: 5,
  justifyContent: 'space-around',
  backgroundColor: 'rgb(179, 217, 250)',

}
  return (
    <>

      <div style={musicPages}>
        <AgregadosReciente />
        
        <MasReproducidas />
      
        <MusicasFavoritas />
      </div>
    </>
  );
};
