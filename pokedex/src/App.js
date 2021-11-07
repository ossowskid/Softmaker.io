import "./App.css";
import { useGetPokemon } from "./hooks/useGetPokemon";

function App() {
  useGetPokemon();
  return <div className="App"></div>;
}

export default App;
