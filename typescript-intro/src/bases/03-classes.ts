/*export class Pokemon {
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}*/

import axios from 'axios';


export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(public readonly id: number, public name: string) {

    }

    scream() {
        console.log('gaaa');
    }

    async getMoves() {
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon/4');

        return data.moves;
    }
}

export const charmander = new Pokemon(1, 'charmander')
charmander.getMoves()