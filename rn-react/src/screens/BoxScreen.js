import React from 'react'
import { View, StyleSheet } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.containerViewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerViewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: 'lightblue'
  },
  viewTwoStyle: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: 'lightgreen',
    marginTop: 40
  },
  viewThreeStyle: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: 'lightpink'
  }
})

export default BoxScreen