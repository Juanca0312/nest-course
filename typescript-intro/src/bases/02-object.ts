
export const pokemonIds = [1, 20, 30, 12];

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur: Pokemon = {
    id: 0,
    name: "Bulbasaur"
}

export const pokemons : Pokemon[] = [];
pokemons.push(bulbasaur);