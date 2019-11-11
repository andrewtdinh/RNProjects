import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import SquareCounter from '../components/SquareCounter'

const SquareScreen = () => {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);
  const color = `rgb(${red}, ${green}, ${blue})`;

  return (
    <View>
      <SquareCounter
        color="Red"
      />
      <SquareCounter
        color="Green"
      />
      <SquareCounter
        color="Blue"
      />
      
      <View
        style={{ height: 100, width: 100, backgroundColor: color }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen;