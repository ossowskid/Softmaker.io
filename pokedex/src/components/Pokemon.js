import { useEffect, useState } from "react";

export const Pokemon = ({ obj }) => {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    if (!obj.url) {
      return;
    }
    const getPokemonData = async () => {
      const response = await fetch(obj.url);
      const data = await response.json();
      setPokemonData(data);
    };
    getPokemonData();
  }, [obj]);
  return (
    <div>
      <div>{obj.name}</div>
      <div>Abilities:</div>
      <ul style={{ listStyle: "none" }}>
        {pokemonData?.abilities.length !== 0
          ? pokemonData?.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))
          : null}
      </ul>
      <div>Photo:</div>
      <img src={`${pokemonData?.sprites.front_default}`} alt={obj.name} />
    </div>
  );
};
