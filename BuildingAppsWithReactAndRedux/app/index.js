import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './src/reducers/player';
import Scoreboard from './src/containers/Scoreboard';

/*
  In order to provide a redux store to our application,
  we'll create a store that's composed of our player reducer and
  pass that store to the reactor redux provider component.
*/

const store = createStore(
 PlayerReducer,
 window.devToolsExtension && window.devToolsExtension()
);

/*
 Wrapping our application with the provider
 component we've created a method for any container component
 to subscribe to Redux data changes, which is essential for passing
 data down to other components.
*/

render(
  <Provider store={store}>
    <Scoreboard />
  </Provider>,
 document.getElementById('root')
);
