import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const SquareCounter = ({ color, setColor }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button 
        title={`More ${color}`}
      />
      <Button 
        title={`Less ${color}`}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareCounter;