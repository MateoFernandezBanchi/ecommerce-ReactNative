import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/colors'

const ProductItem = ({product}) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{product.description}</Text>
      <Image source={{uri: product.image}} style={styles.image}/>
      <Text style={styles.price}> ${product.price}</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorSecondary,
    width:250,
    height:250,
    marginVertical:20,
    borderRadius:20,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 4,
        height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  image: {
    width: 190,
    height: 190,
  },
  description: {
    color:'white',
    fontSize:18,
    paddingVertical:5
  },
  price: {
    color:'white',
    paddingVertical:5,
    fontSize:16
  }
})