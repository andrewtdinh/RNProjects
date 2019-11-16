import React, { useReducer } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const CounterScreen = () => {
  // const [ counter, setCounter ] = useState(0);
  const reducer = (state, action ) => {
    switch(action.type) {
      case 'increment':
        return { ...state, counter: (state.counter + action.payload) }
      case 'decrement':
        return { ...state, counter: (state.counter + action.payload) }
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
        onPress={() => dispatch({ type: 'decrement', payload: -1 })} 
      />
      <Text>Current Counter: {state.counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginVertical: 10
  }
})

export default CounterScreen;