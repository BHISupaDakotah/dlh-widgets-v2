import { useState, useEffect } from "react";

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState([]);

  function renderPokemon() {
    return pokemonData.map((pokemon) => {
      return (
        <div key={pokemon.url}>
          <div className="pokemon-name">{pokemon.name}</div>
        </div>
      );
    });
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?page=1&limit=25")
      .then((res) => res.json())
      .then((data) => setPokemonData(data.results))
      .catch((err) => console.error("pokemon err ", err));
  }, [pokemonData]);

  return (
    <div className="pokemon-container">
      <div className="pokemon-name-wrapper">
        <h1 className="pokemon-title"> pokemon by name </h1>
        {renderPokemon()}
      </div>
    </div>
  );
}
