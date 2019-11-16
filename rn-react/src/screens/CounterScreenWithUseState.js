import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const CounterScreen = () => {
  const [ counter, setCounter ] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => setCounter(counter + 1)}
      />
      <Button 
        title="Decrease"
        onPress={() => setCounter(counter - 1)} 
      />
      <Text>Current Counter: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginVertical: 10
  }
})

export default CounterScreen;