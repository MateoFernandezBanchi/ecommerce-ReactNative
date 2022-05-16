import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/colors'


const CategoryItem = ({category}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category.category}</Text>
      <Image source={{uri:(category.image)}}style={styles.image} />
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 15,
    backgroundColor:colors.colorSecondary,
    margin: 15,
    borderRadius: 10,
    shadowOffset: {
      width: 4,
      height: 6,
  },
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  elevation: 12,
  },
  text: {
    fontSize: 18,
    fontFamily: 'LatoRegular'
  },
  image: {
    width:100,
    height:100,
    borderRadius:100,
    marginTop:10
  }
})