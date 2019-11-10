import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

class CounterScreen extends React.Component {
  state = {
    counter: 0
  }

  render() {
    return (
      <View>
        <Button
          title="Increase"
          onPress={() => this.setState({counter: this.state.counter + 1})}
        />
        <Button 
          title="Decrease"
          onPress={() => this.setState({counter: this.state.counter - 1})} 
        />
        <Text>{this.state.counter}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginVertical: 10
  }
})

export default CounterScreen;