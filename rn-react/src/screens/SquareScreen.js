import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const SquareScreen = () => {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);
  const color = `rgb(${red}, ${green}, ${blue})`;

  return (
    <View>
      <Text>Red</Text>
      <Button
        title="More Red"
        onPress={() => {
          setRed((red + 1) % 255)
        }}
      />
      <Button
        title="Less Red"
        onPress={() => {
          setRed((red - 1) % 255)
        }}
      />
      <Text>Green</Text>
      <Button
        title="More Green"
        onPress={() => {
          setGreen((green + 1) % 255)
        }}
      />
      <Button
        title="Less Green"
        onPress={() => {
          setGreen((green - 1) % 255)
        }}
      />
      <Text>Blue</Text>
      <Button
        title="More Blue"
        onPress={() => {
          setBlue((blue + 1) % 255)
        }}
      />
      <Button
        title="Less Blue"
        onPress={() => {
          setBlue((blue - 1) % 255)
        }}
      />
      <View
        style={{ height: 100, width: 100, backgroundColor: color }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen;