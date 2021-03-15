import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ClicksComponent from '../clicks/clicks.components';
import PokemonComponent from '../pokemon/pokemon.component';
import StoreComponent from '../store/store.component';

const RoutingComponent: React.FC = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/clicks" component={ClicksComponent}></Route>
                <Route path="/pokemon" component={PokemonComponent}></Route>
                <Route path="/store" component={StoreComponent}></Route>
                <Redirect path="/" to="/clicks"></Redirect>
            </Switch>
        </React.Fragment>
    )
}

export default RoutingComponent;