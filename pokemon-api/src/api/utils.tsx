
/**
 * Function to fetch data from Pokemon API
 * @returns {Array<string>} array of 150 pokemons data
 */
export async function getPokemonList() {
    const data = await fetch(
        'https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0'
    ).then(response => response.json())
    console.log(data)
    return data.results
}

/**
 *  Function to fetch description for selected pokemon from Pokemon API
 *  @returns {string} Short description of Pokemon
 */
export async function getPokemonDescription(id: number) {
    const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
    ).then(response => response.json())

    return pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " ")
}

/**
 * Function to fetch sprite of the pokemon from Pokemon API
 * Returns URL of a Pokemon sprite image
 */
export async function getPokemonSprite(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}