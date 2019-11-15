import React, { useReducer } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import SquareCounter from '../components/SquareCounter'

const COLOR_CHANGE_AMOUNT = 15;

const reducer = (state, action) => {
  // state is { red: number, green: number, blue: number }
  // action is { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }
  switch (action.type) {
    case 'change_red':
      if (state.red + action.payload > 255 || state.red + action.payload < 0) {
        return state;
      }
      return { ...state, red: state.red + action.payload }

    case 'change_green':
      if (state.green + action.payload > 255 || state.green + action.payload < 0) {
        return state;
      }
      return { ...state, green: state.green + action.payload }

    case 'change_blue':
      if (state.blue + action.payload > 255 || state.blue + action.payload < 0) {
        return state;
      }
      return { ...state, blue: state.blue + action.payload }

    default:
      return state;
  }
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const color = `rgb(${state.red}, ${state.green}, ${state.blue})`

  return (
    <View>
      <SquareCounter
        color="Red"
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR_CHANGE_AMOUNT})}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_CHANGE_AMOUNT })}
      />
      <SquareCounter
        color="Green"
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_CHANGE_AMOUNT })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_CHANGE_AMOUNT })}
      />
      <SquareCounter
        color="Blue"
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_CHANGE_AMOUNT })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_CHANGE_AMOUNT })}
      />
      
      <View
        style={{ height: 150, width: 150, backgroundColor: color }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen;