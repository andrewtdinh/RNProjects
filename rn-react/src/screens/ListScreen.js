import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Friend 1', age: 3},
    { name: 'Friend 2', age: 24},
    { name: 'Friend 3', age: 67},
    { name: 'Friend 4', age: 23},
    { name: 'Friend 5', age: 18},
    { name: 'Friend 6', age: 32},
    { name: 'Friend 7', age: 56},
    { name: 'Friend 8', age: 45},
    { name: 'Friend 9', age: 4},
  ];


  return (
    <FlatList 
      showsVerticalScrollIndicator={false}
      keyExtractor={(option) => option.name}
      data={friends}
      renderItem={({ item, index }) => {
        return <Text style={styles.textStyle}>{item.name} - age {item.age}</Text>
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10
  }
})

export default ListScreen