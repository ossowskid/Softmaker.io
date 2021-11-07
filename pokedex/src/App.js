import "./App.css";
import { CreatePokedex } from "./components/CreatePokedex";
import { useGetPokemon } from "./hooks/useGetPokemon";

function App() {
  useGetPokemon();
  return (
    <div className="App">
      <CreatePokedex />
    </div>
  );
}

export default App;
