import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoutingComponent from './components/ui/routing.component';
import NavComponent from './components/ui/nav.component';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';

/**
 * A clicker/poke app, in which you must pay clicks to 
 * get pokemon.
 * 1. Clicking View
 * 2. Store View
 * 3. Pokemon View
 * 
 * State
 * ----
 * What what will our application state look like?
 * counting clicks - Visible in nav, actions issued in store/click to update
 * Some kind of pokemon collection/array/etc.
 * 
 */

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <div id="app">
          <BrowserRouter>
            <NavComponent></NavComponent>
            <RoutingComponent></RoutingComponent>
          </BrowserRouter>
        </div>

      </Provider>
    </React.Fragment>
  );
}

export default App;
