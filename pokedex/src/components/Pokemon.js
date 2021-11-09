import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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
    <Card sx={{ maxWidth: 345, margin: "0 auto", bgcolor: "#c0c0c0" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={`${pokemonData?.sprites.front_default}`}
          alt={obj.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {obj.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ listStyle: "none" }}
          >
            <span
              style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
            >
              Abilities:
            </span>
            {pokemonData?.abilities.length !== 0
              ? pokemonData?.abilities.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))
              : null}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
