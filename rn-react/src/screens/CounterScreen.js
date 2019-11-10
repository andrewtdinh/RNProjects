import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

class CounterScreen extends React.Component {
  state = {
    counter: 0
  }

  render() {
    return (
      <View style={styles.buttonStyle}>
        <Button title="Increase" />
        <Button title="Decrease" />
        <Text>{this.state.counter}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginVertical: 5
  }
})

export default CounterScreen;