import './App.css'
import Selector from './components/Selector'
import Card from './components/Card'
import React from 'react'
import { useEffect, useState } from 'react'
import { getPokemonList } from './api/utils'
import { CurrentPokemon, Pokemon } from './types/myTypes'

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [currentPokemon, setCurrentPokemon] = useState<CurrentPokemon>({
    id: 1,
    name: "Bulbazaur"
  })

  function handleSelectorChange(e: React.ChangeEvent<HTMLSelectElement>): void{
    const selectedValue: number = parseInt(e.currentTarget.value)
    const pok: Pokemon = pokemons[selectedValue + 1]
    const pokemonName: string = pok.name.slice(0,1).toUpperCase() + pok.name.slice(1).toLowerCase()
    setCurrentPokemon({
      id: selectedValue,
      name: pokemonName
    })
  }

  useEffect(() => {
    async function getList() {
      const res: Array<Pokemon> = await getPokemonList()
      setPokemons(res)
    }

    getList()
  }, [])

  const pokemonList: JSX.Element[] = pokemons.map((pokemon: Pokemon, id: number) => {
    return (
      <option key={id} value={id+1}>
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
