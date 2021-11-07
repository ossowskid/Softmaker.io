import { useEffect, useState } from "react";

export const useGetPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      setPokemons(data.results);
    };
    getPokemon();
  }, []);
  console.log(pokemons);
};
