import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const COLOR_CHANGE_AMOUNT = 15;

const SquareCounter = ({ color, setColor, colorAmount }) => {

  const calculateColor = (colorAmount, changeAmount) => {
    const nextAmount = colorAmount + changeAmount;
    if (nextAmount <= 0) {
      return 0;
    } else if (nextAmount >= 255) {
      return 255;
    } 

    return nextAmount
  }

  return (
    <View>
      <Text>{color}</Text>
      <Button 
        title={`More ${color}`}
        onPress={() => setColor(calculateColor(colorAmount, COLOR_CHANGE_AMOUNT))}
      />
      <Button 
        title={`Less ${color}`}
        onPress={() => setColor(calculateColor(colorAmount, -1 * COLOR_CHANGE_AMOUNT))}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareCounter;