import { Routes, Route } from "react-router-dom";
import { useGetPokemon } from "./hooks/useGetPokemon";
import { CreatePokedex } from "./components/CreatePokedex";
import { Pokemon } from "./components/Pokemon";

function App() {
  const pokemonRoutes = useGetPokemon();
  return (
    <>
      <Routes>
        <Route path="/" element={<CreatePokedex />} />
        {pokemonRoutes.map((el) => {
          return (
            <Route
              key={el.name}
              path={`pokemons/${el.name}`}
              element={<Pokemon obj={el} />}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
