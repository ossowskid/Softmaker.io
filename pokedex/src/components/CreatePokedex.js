import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGetPokemon } from "../hooks/useGetPokemon";

export const CreatePokedex = () => {
  const [filterData, setFilterData] = useState("");
  const pokemons = useGetPokemon();

  const handleChange = (e) => {
    e.preventDefault();
    setFilterData(e.target.value);
    console.log(e.target.value);
    return filterData;
  };
  let params = useParams();
  console.log(params);
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <input type="text" onChange={handleChange} />

      {pokemons.map((el, i) => {
        return (
          <div key={i}>
            <NavLink to={`/pokemons/${el.name}`}>{el.name}</NavLink>
          </div>
        );
      })}
    </div>
  );
};
