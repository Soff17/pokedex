import React from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import IntroPokedex from './components/IntroPokedex';
import Profile from './components/Profile';
import './index.css';
import {Pokemon} from './models/Pokemon';
import {Moves} from './models/Moves';
import {Stats} from './models/Stats';
import {PokeApi} from './api/PokeApi';
import PokemonComponent from './components/Pokemon';
import MovimientosCard from './components/Movimientos';

function App() {
  const [pokemonNumber, setPokemonNumber] = React.useState<string|undefined>(undefined);
  const [pokemon,setPokemon]=React.useState<Pokemon|undefined>(undefined);
  const [moves,setMoves]=React.useState<Moves|undefined>(undefined);
  const [stats,setStats]=React.useState<Stats|undefined>(undefined);
  const [loading,setLoading]=React.useState<boolean>(false);
  const [error,setError]=React.useState<string|undefined>(undefined);
  function buscar(){
    setLoading(true);
    setError(undefined);
    PokeApi.getPokemonById(pokemonNumber).then((response)=>{
      setPokemon(response.data);
      setMoves(response.data);
      setStats(response.data);
      setLoading(false);
    }).catch((error)=>{
      console.log(error)
      setLoading(false);
      setError("Pokemon no encontrado");
    });
  }


  return (
    
    <div className="App">
      <Card></Card>
      <Profile></Profile>
      <input onChange={(event)=>{setPokemonNumber(event.target.value)}} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={pokemonNumber}></input>
      <Button label="Buscar" color='green' onClick={()=>buscar()}></Button>
      {loading && <p>Cargando...</p>}
      {(!loading && pokemon && moves && stats &&!error) && <>
        <IntroPokedex stats={stats}></IntroPokedex>
        <PokemonComponent pokemon={pokemon}></PokemonComponent>
        <div className="grid grid-cols-12 gap-4">
          <MovimientosCard moves={moves}></MovimientosCard>
        </div>
        
      </>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
