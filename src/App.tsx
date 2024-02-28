// En App.tsx

import React, { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import './index.css';

import {Pokemon} from './models/Pokemon';
import {Moves} from './models/Moves';
import {Stats} from './models/Stats';
import {PokeApi} from './api/PokeApi';

import Card from './components/Card';

function App() {
  const [pokemonNumber, setPokemonNumber] = React.useState<string|undefined>(undefined);
  const [pokemon,setPokemon]=React.useState<Pokemon|undefined>(undefined);
  const [moves,setMoves]=React.useState<Moves|undefined>(undefined);
  const [stats,setStats]=React.useState<Stats|undefined>(undefined);
  const [loading,setLoading]=React.useState<boolean>(false);
  const [error,setError]=React.useState<string|undefined>(undefined);

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
      setStats(undefined);
      setMoves(undefined);
      setPokemon(undefined);
    });
  }

  return (
    <div className="App">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-10 py-7 rounded-lg relative" role="alert">
          <strong className="font-bold text-lg">Error: </strong>
          <span className="block sm:inline text-md">{error}</span>
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      )}
      <Card
        name={error ? 'Intente otro pokemon' : pokemon?.name || 'Encuentre su pokemon'}
        image={error ? 'https://i.pinimg.com/originals/da/d4/55/dad455563bac8b9198130aa5f75fb930.png' : pokemon?.sprites?.other['official-artwork'].front_default || 'https://i.pinimg.com/originals/da/d4/55/dad455563bac8b9198130aa5f75fb930.png'}
        height={pokemon?.height}
        stats={pokemon?.stats}
        //description="Aquí va una descripción del Pokémon"
        onSearch={buscar}
        onInputChange={(event) => setPokemonNumber(event.target.value)}
        inputValue={pokemonNumber}
      />
      {loading && <p>Cargando...</p>}
      {(!loading && pokemon && moves && stats &&!error) && <>
        <Profile stats={stats} moves={moves}></Profile>
      </>}
    </div>
  );
}

export default App;

