/*export class Pokemon {
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}*/

import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-repsonse.interface';


export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(public readonly id: number, public name: string) {

    }

    scream() {
        console.log('gaaa');
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

        console.log(data.moves[0]);


        return data.moves;
    }
}

export const charmander = new Pokemon(1, 'charmander')
charmander.getMoves()

