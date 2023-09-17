/**
 * Types for data from API -> Pokemon and
 * for custom object -> currentPokemon
 */

export interface Pokemon {
    name: string,
    url: string
}

export interface CurrentPokemon {
    id: number,
    name: string
  }