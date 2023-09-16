import './App.css'
import Selector from './components/Selector'
import Card from './components/Card'
import { useEffect, useState } from 'react'
import { getPokemonList } from './api/utils'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState({
    id: 1,
    name: "Bulbazaur"
  })

  type Pokemon = {
    name: string,
    url: string
  }

  function handleSelectorChange(e: any) {
    const pok: Pokemon = pokemons[e.target.value-1]
    setCurrentPokemon({
      id: e.target.value,
      name: pok.name.slice(0,1).toUpperCase() + pok.name.slice(1).toLowerCase()
    })
  }

  useEffect(() => {
    async function getList() {
      const res = await getPokemonList()
      setPokemons(res)
    }

    getList()
  }, [])

  const pokemonList = pokemons.map((pokemon: Pokemon, id: number) => {
    return (
      <option key={id+1} value={id+1}>
        {pokemon.name}
      </option>
    )
  })
   

  return (
    <>
      <Selector onSelectorChange={handleSelectorChange} >{pokemonList}</Selector>
      <Card currentPokemon = {currentPokemon}/>
    </>
  )
}

export default App
