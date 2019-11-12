import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const COLOR_CHANGE_AMOUNT = 15;

const SquareCounter = ({ color, setColor, colorAmount }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button 
        title={`More ${color}`}
        onPress={() => setColor((colorAmount + COLOR_CHANGE_AMOUNT) % 255)}
      />
      <Button 
        title={`Less ${color}`}
        onPress={() => setColor((colorAmount - COLOR_CHANGE_AMOUNT) % 255)}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareCounter;