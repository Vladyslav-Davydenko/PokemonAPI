export async function getPokemonList() {
    const data: any = await fetch(
        'https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0'
    ).then(response => response.json())
    return data.results
}

/**
 *  @returns {string} Short description of Pokemon
 */
export async function getPokemonDescription(id: number) {
    const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
    ).then(response => response.json())

    return pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " ")
}

/**
 * Returns URL of a Pokemon sprite image
 */
export async function getPokemonSprite(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}