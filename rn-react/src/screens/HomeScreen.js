import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Andrew App</Text>
      <Button 
        title="Go to Components Demo" 
        onPress={() => props.navigation.navigate('Components')}
      />
      <Button 
        title="Go to List Demo" 
        onPress={() => props.navigation.navigate('List')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
