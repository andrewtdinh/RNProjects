import React, { useReducer } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import SquareCounter from '../components/SquareCounter'

const COLOR_CHANGE_AMOUNT = 15;

const reducer = (state, action) => {
  // state is { red: number, green: number, blue: number }
  // action is { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
  switch (action.colorToChange) {
    case 'red':
    case 'green':
    case 'blue':
    default:
  }
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

  return (
    <View>
      <SquareCounter
        color="Red"
        onIncrease={() => }
        onDecrease={() => }
      />
      <SquareCounter
        color="Green"
        onIncrease={() => }
        onDecrease={() => }
      />
      <SquareCounter
        color="Blue"
        onIncrease={() => }
        onDecrease={() => }
      />
      
      <View
        style={{ height: 150, width: 150, backgroundColor: color }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen;