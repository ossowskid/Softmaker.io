import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useGetPokemon } from "../hooks/useGetPokemon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

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
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 0.5, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Enter Pokemon Name"
          variant="outlined"
          value={filterData}
          onChange={handleSuggestions}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "primary.main",
          margin: "0 auto",
        }}
      >
        <nav aria-label="pokemons list" style={{ textAlign: "center" }}>
          <List>
            {suggestions.map((el, i) => {
              return (
                <ListItem key={el.name} disablePadding>
                  <ListItemButton>
                    <NavLink
                      style={{
                        textDecoration: "none",
                        color: "black",
                        margin: "0 auto",
                      }}
                      to={`pokemons/${el.name}`}
                    >
                      {el.name}
                    </NavLink>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Outlet />
        </nav>
      </Box>
    </div>
  );
};
