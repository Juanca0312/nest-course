/*export class Pokemon {
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}*/

export class Pokemon {

    get imageUrl() : string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(public readonly id: number, public name: string) {

    }

    scream() {
        console.log('gaaa');
    }
}

export const charmander = new Pokemon(1, 'charmander')