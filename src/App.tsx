// En App.tsx

import React, { useState } from 'react';
import './App.css';
import IntroPokedex from './components/IntroPokedex';
import Profile from './components/Profile';
import './index.css';
import { Pokemon } from './models/Pokemon';
import { PokeApi } from './api/PokeApi';
import Card from './components/Card';

function App() {
  const [pokemonNumber, setPokemonNumber] = useState<string | undefined>(undefined);
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  function buscar() {
    setLoading(true);
    setError(undefined);
    PokeApi.getPokemonById(pokemonNumber).then((response) => {
      setPokemon(response.data);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
      setError("Pokemon no encontrado");
    });
  }

  return (
    <div className="App">
      <Card
        name={pokemon?.name}
        image={pokemon?.sprites?.other['official-artwork'].front_default}
        //description="Aquí va una descripción del Pokémon"
        onSearch={buscar}
        onInputChange={(event) => setPokemonNumber(event.target.value)}
        inputValue={pokemonNumber}
      />
      <IntroPokedex />
      <Profile />
      {loading && <p>Cargando...</p>}
      {(!loading && pokemon && !error) && <div> {/* Componente de Pokémon si deseas mostrarlo aquí */} </div>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;

