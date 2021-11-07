import { useEffect, useState } from "react";

export const useGetPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      setPokemons(data.results);
    };
    getPokemon();
    console.log(pokemons[1]);
  }, [pokemons]);

  useEffect(() => {
    if (pokemons.length < 1) {
      return;
    }
    const pokedex = [];
    for (let id = 0; id < 20; id++) {
      const pokeInformation = {
        name: pokemons[id].name,
      };
      pokedex.push(pokeInformation);
      setPokemon(pokedex);
    }
  }, [pokemons]);
};
