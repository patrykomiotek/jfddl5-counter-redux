import React, { Component } from 'react';
import { combineReducers, createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import Counter from './Counter';
import CounterButtons from './Counter/CounterButtons';
import counterReducer from './Counter/store';
import listReducer from './List/store';
import List from './List';

const reducers = combineReducers({
  counter: counterReducer,
  list: listReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers();

const store = createStore(reducers, enhancer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
          <CounterButtons />
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
