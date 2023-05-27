
import { MusicContextProvider } from "./context/MusicContext";
import { MusicaPage } from "./pages/MusicaPages";

function App() {
  return (
    <MusicContextProvider>
      <MusicaPage />

    </MusicContextProvider>
  );
}

export default App;
