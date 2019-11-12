import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import SquareCounter from '../components/SquareCounter'

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const color = `rgb(${red}, ${green}, ${blue})`;

  return (
    <View>
      <SquareCounter
        color="Red"
        setColor={setRed}
        colorAmount={red}
      />
      <SquareCounter
        color="Green"
        setColor={setGreen}
        colorAmount={green}
      />
      <SquareCounter
        color="Blue"
        setColor={setBlue}
        colorAmount={blue}
      />
      
      <View
        style={{ height: 100, width: 100, backgroundColor: color }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen;