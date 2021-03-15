import { pokemonTypes } from '../actions/poke.actions';

export interface PokeItem {
    id: number;
    known: boolean;
    spriteUrl: string | undefined;
    name: string | undefined;
}

const generateInitialPokemon = () => {
    const pokemon: PokeItem[] = [];
    for(let i = 1; i <= 150; i++) {
        pokemon.push({
            id: i,
            known: false,
            spriteUrl: undefined,
            name: undefined
        });
    }
    return pokemon;
}

export interface PokeState {
    pokemon: PokeItem[];
}

const initialState = {
    pokemon: generateInitialPokemon()
};

const pokemonReducer = (state = initialState, action: any) => {
    // Switch on the action object
    // create cases for any action this reducer should react to
    // case should return the new state replacing the old state
    switch(action.type) {
        case pokemonTypes.ADD_POKEMON:
            const newArray = [...state.pokemon];
            const newPoke: PokeItem = action.payload;
            newArray.splice(newPoke.id - 1, 1, newPoke);
            return {
                ...state,
                pokemon: newArray
            };
    }
    return state;
}

export default pokemonReducer;
