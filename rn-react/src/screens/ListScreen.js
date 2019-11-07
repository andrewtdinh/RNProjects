import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const options = [
    { label: 'option #1'},
    { label: 'option #2'},
    { label: 'option #3'},
    { label: 'option #4'},
    { label: 'option #5'},
    { label: 'option #6'},
    { label: 'option #7'},
    { label: 'option #8'},
    { label: 'option #9'},
  ];


  return (
    <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(option) => option.label}
      data={options}
      renderItem={({ item, index }) => {
        return <Text style={styles.textStyle}>{item.label}</Text>
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
})

export default ListScreen