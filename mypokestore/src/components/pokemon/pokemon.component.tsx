import React from 'react';
import { PokeState } from '../../reducers/pokemon-reducer';
import { IState } from '../../reducers';
import { connect } from 'react-redux';

interface PokemonComponentState {
    pokemon: PokeState
}

const PokemonComponent: React.FC<PokemonComponentState> = ({pokemon}) => {

    const mapPokemon = () => {
        return pokemon.pokemon.map((poke) => {
            return (
            <div className="poke-card">
                <div 
                    key={poke.id} 
                    className={"poke-box " + (poke.known ? '' : 'unknown') }
                ><img src={poke.spriteUrl}></img></div>
                <span className="poke-tag">#{poke.id} - {poke.name ? poke.name : '?'}</span>
            </div>
            );
        });
    }

    return (
        <section id="pokemon-container">
            {mapPokemon()}
        </section>
    )
}

const mapStateToProps = (state: IState) => ({
    pokemon: state.pokemon
});

export default connect(mapStateToProps)(PokemonComponent);