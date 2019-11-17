import React, { useReducer } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const CounterScreen = () => {
  const reducer = (state, action ) => {
    // state === { counter: number }
    // action === { type === 'increment' || 'decrement', payload: 1 }
    switch(action.type) {
      case 'increment':
        return { ...state, counter: (state.counter + action.payload) }
      case 'decrement':
        return { ...state, counter: (state.counter - action.payload) }
      default:
        return state;
    }
  }
  const [ state, dispatch ] = useReducer(reducer, {counter: 0});

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'increment', payload: 1 })}
      />
      <Button 
        title="Decrease"
        onPress={() => dispatch({ type: 'decrement', payload: 1 })} 
      />
      <Text>Current Count: {state.counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginVertical: 10
  }
})

export default CounterScreen;