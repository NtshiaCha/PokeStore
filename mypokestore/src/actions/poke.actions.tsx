import { PokeItem } from '../reducers/pokemon-reducer';

export const pokemonTypes = {
    ADD_POKEMON: 'ADD_POKEMON'
};

export const addPokemonAction = (poke: PokeItem) => (dispatch: any) => {
    dispatch({
        payload: poke,
        type: pokemonTypes.ADD_POKEMON
    });
}