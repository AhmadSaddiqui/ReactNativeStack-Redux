import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Initial State
const initialState = {
  counter: 0,
};

// Actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const incrementCounter = () => ({
  type: INCREMENT,
});

const decrementCounter = () => ({
  type: DECREMENT,
});

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

// Stack Navigator
const Stack = createStackNavigator();

// Home Screen
const HomeScreen = ({ navigation }) => {
  const counter = useSelector((state) => state.counter);
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>Counter: {counter}</Text>
      <Button title="Go to Increment" onPress={() => navigation.navigate('Increment')} />
      <Button title="Go to Decrement" onPress={() => navigation.navigate('Decrement')} />
    </View>
  );
};

// Increment Screen
const IncrementScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Increment Screen</Text>
      <Button title="Increment" onPress={() => dispatch(incrementCounter())} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

// Decrement Screen
const DecrementScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Decrement Screen</Text>
      <Button title="Decrement" onPress={() => dispatch(decrementCounter())} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

// Main App Component
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Increment" component={IncrementScreen} />
          <Stack.Screen name="Decrement" component={DecrementScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;

