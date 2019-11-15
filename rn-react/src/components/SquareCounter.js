import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const SquareCounter = ({ color, onIncrease, onDecrease }) => {

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
        onPress={() => onIncrease()}
      />
      <Button 
        title={`Less ${color}`}
        onPress={() => onDecrease()}
      />
    </View>
  )
}

export default SquareCounter;