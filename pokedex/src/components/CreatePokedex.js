import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useGetPokemon } from "../hooks/useGetPokemon";

export const CreatePokedex = () => {
  const [filterData, setFilterData] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const pokemons = useGetPokemon();

  useEffect(() => {
    setSuggestions(pokemons);
  }, [pokemons]);

  const handleSuggestions = (e) => {
    setFilterData(e.target.value);
    const matches = suggestions.filter((el) => {
      const regex = new RegExp(`^${e.target.value}`, "gi");
      return el.name.match(regex);
    });
    setSuggestions(matches);
    if (e.target.value.length === 0) {
      setSuggestions(pokemons);
    }
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <input type="text" value={filterData} onChange={handleSuggestions} />

      {suggestions.map((el, i) => {
        return (
          <div key={i}>
            <NavLink to={`pokemons/${el.name}`}>{el.name}</NavLink>
          </div>
        );
      })}
      <Outlet />
    </div>
  );
};
