Folder Structure

App ---App.js
    |--CounterComponent.js
    |--Store.js

_________________________________________________App.js__________________________________________
import React from 'react';
import { Provider } from 'react-redux';
import CounterComponent from './CounterComponent';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

export default App;
____________________________________________________________________________________________________


_________________________________________________CounterComponent.js__________________________________________

import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const CounterComponent = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

export default CounterComponent;



__________________________________________________________________________________________________

_________________________________________________store.js__________________________________________

import { createStore } from 'redux';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;



______________________________________________________________________________________________
