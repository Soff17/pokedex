// En App.tsx

import React, { useState } from 'react';
import './App.css';
import IntroPokedex from './components/IntroPokedex';
import Profile from './components/Profile';
import './index.css';

import {Pokemon} from './models/Pokemon';
import {Moves} from './models/Moves';
import {Stats} from './models/Stats';
import {PokeApi} from './api/PokeApi';
import PokemonComponent from './components/Pokemon';

function App() {
  const [pokemonNumber, setPokemonNumber] = React.useState<string|undefined>(undefined);
  const [pokemon,setPokemon]=React.useState<Pokemon|undefined>(undefined);
  const [moves,setMoves]=React.useState<Moves|undefined>(undefined);
  const [stats,setStats]=React.useState<Stats|undefined>(undefined);
  const [loading,setLoading]=React.useState<boolean>(false);
  const [error,setError]=React.useState<string|undefined>(undefined);
  function buscar(){
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
      setMoves(response.data);
      setStats(response.data);
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
        height={pokemon?.height}
        //description="Aquí va una descripción del Pokémon"
        onSearch={buscar}
        onInputChange={(event) => setPokemonNumber(event.target.value)}
        inputValue={pokemonNumber}
      />
      <IntroPokedex />
      <Profile />
      {loading && <p>Cargando...</p>}
      {(!loading && pokemon && moves && stats &&!error) && <>
        <IntroPokedex stats={stats}></IntroPokedex>
        <Profile stats={stats} moves={moves}></Profile>
        <PokemonComponent pokemon={pokemon}></PokemonComponent>
      </>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;

