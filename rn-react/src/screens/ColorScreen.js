import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Generate Color"
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorScreen;