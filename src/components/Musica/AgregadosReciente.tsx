
import { AgregadosHoy } from "./AgregadosHoy"

export const AgregadosReciente = () => {
  const reciente = {

    backgroundColor: 'blue',
    padding: 5
  }
  return (
    <div style={reciente}>
      <h1>Musicas agregadas reciente</h1>
 
      <AgregadosHoy />
    </div>
  );
};
