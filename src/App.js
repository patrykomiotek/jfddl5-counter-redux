import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Counter from './Counter';
import CounterButtons from './Counter/CounterButtons';
import counterReducer from './Counter/store';

const reducers = combineReducers({
  counter: counterReducer
});

const store = createStore(
  reducers
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
          <CounterButtons />
        </div>
      </Provider>
    );
  }
}

export default App;
