import React, { useState } from 'react';
import pokeballImg from '../../assets/images/pokeball.png';
import { PokeItem } from '../../reducers/pokemon-reducer';
import { IState } from '../../reducers';
import { spendClicks } from '../../actions/clicker.component';
import { addPokemonAction } from '../../actions/poke.actions';
import { connect } from 'react-redux';
import { ClickerState } from '../../reducers/clicker-reducer';
import Axios from 'axios';

interface StoreComponentProps {
    clicks: ClickerState;
    spendClicks: (clicks: number) => any;
    addPokemon: (pokemon: PokeItem) => any;
}

const StoreComponent: React.FC<StoreComponentProps> = (props: StoreComponentProps) => {
    const [loading, setLoading] = useState(false);

    const requestPokemon = () => {
        setLoading(true);
        props.spendClicks(20);
        const id = Math.floor(Math.random() * 150 + 1);
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => {
                const pokemon: PokeItem = {
                    id: response.data.id,
                    name: response.data.name,
                    known: true,
                    spriteUrl: response.data.sprites.front_default
                };
                props.addPokemon(pokemon);
                setLoading(false);
            }).catch(err => {
                setLoading(false);
            })
    }

    return (
        <div id="store-container">
            <img src={pokeballImg}></img>
            <button 
                onClick={() => requestPokemon()}
                className="purchase-button"
                disabled={loading || props.clicks.clicks < 20}
                >20ҫ</button>
        </div>
    )
}

const mapStateToProps = (state: IState) => ({
    clicks: state.clicks
});

const mapDispatcherToProps = {
    spendClicks: spendClicks,
    addPokemon: addPokemonAction
}

export default connect(mapStateToProps, mapDispatcherToProps)(StoreComponent);