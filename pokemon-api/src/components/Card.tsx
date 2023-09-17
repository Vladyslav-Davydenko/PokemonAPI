import { useEffect, useState } from "react"
import { getPokemonSprite } from "../api/utils"
import { getPokemonDescription } from "../api/utils"
import { CurrentPokemon } from "../types/myTypes"

interface cardProps {
    currentPokemon: CurrentPokemon
}

export default function Card(props: cardProps) {
    const {currentPokemon} = props
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        async function getImage() {
            const pokemonSprite: string = await getPokemonSprite(currentPokemon.id)
            const pokemonDescription: string = await getPokemonDescription(currentPokemon.id)

            setImage(pokemonSprite)
            setDescription(pokemonDescription)
        }

        getImage()
    }, [currentPokemon])
    return (
        <div className="container">
            <div className="pokemon-image">
            <img src={image} alt={currentPokemon?.name ?? ""} height="200px" width="200px"/>
            </div>
            <div className="information">
                <p className="name">
                    {currentPokemon?.name}
                </p>
                <p className="description">
                    {description}
                </p>
            </div>
        </div>
    )
}