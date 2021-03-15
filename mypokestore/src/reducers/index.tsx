import pokemonReducer, { PokeState } from './pokemon-reducer';
import clickerReducer, { ClickerState } from './clicker-reducer';
import { combineReducers } from 'redux';

export interface IState {
    pokemon: PokeState;
    clicks: ClickerState;
}

export const state = combineReducers<IState>({
    pokemon: pokemonReducer,
    clicks: clickerReducer
});