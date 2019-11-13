import React, { } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import SquareCounter from '../components/SquareCounter'

const SquareScreen = () => {

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