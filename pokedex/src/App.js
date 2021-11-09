import { Routes, Route } from "react-router-dom";
import { useGetPokemon } from "./hooks/useGetPokemon";
import { CreatePokedex } from "./components/CreatePokedex";

function App() {
  const pokemonRoutes = useGetPokemon();
  console.log(7, pokemonRoutes);

  return (
    <>
      <Routes>
        <Route path="/" element={<CreatePokedex />} />
        {pokemonRoutes.map((el) => {
          return (
            <Route path={`pokemons/${el.name}`} element={<CreatePokedex />} />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
