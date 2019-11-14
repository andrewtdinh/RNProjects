import React, { useReducer } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import SquareCounter from '../components/SquareCounter'

const COLOR_CHANGE_AMOUNT = 15;

const reducer = (state, action) => {
  // state is { red: number, green: number, blue: number }
  // action is { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount }
    case 'green':
      return { ...state, green: state.green + action.amount }
    case 'blue':
      return { ...state, blue: state.blue + action.amount }
    default:
      return state;
  }
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

  return (
    <View>
      <SquareCounter
        color="Red"
        onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_CHANGE_AMOUNT})}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_CHANGE_AMOUNT })}
      />
      <SquareCounter
        color="Green"
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_CHANGE_AMOUNT })}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_CHANGE_AMOUNT })}
      />
      <SquareCounter
        color="Blue"
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_CHANGE_AMOUNT })}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_CHANGE_AMOUNT })}
      />
      
      <View
        style={{ height: 150, width: 150, backgroundColor: color }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen;