import { useState } from "react";
import { useGetPokemon } from "../hooks/useGetPokemon";
// import { useGetPokemon } from "../hooks/useGetPokemon";

export const CreatePokedex = () => {
  const [filterData, setFilterData] = useState("");
  const pokemons = useGetPokemon();

  const handleChange = (e) => {
    e.preventDefault();
    setFilterData(e.target.value);
    return filterData;
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      {pokemons.map((el, i) => {
        return (
          <div key={i}>
            <p>{el.name}</p>
          </div>
        );
      })}
    </>
  );
};
