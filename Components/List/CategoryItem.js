import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/colors';
import { useWindowDimensions } from 'react-native';


//  const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const CategoryItem = ({category}) => {

  const {width, height} = useWindowDimensions()

  return (
    <View style={{...styles.container,
      maxWidth: width * 1,
     maxHeight: height * 0.25
  }}
    >
      <Text style={styles.text}>{category.category}</Text>
      <Image source={{uri:(category.image)}}style={styles.image} />
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container: {
    backgroundColor:"black",
    width: 150,
    borderRadius:100,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor:colors.colorSecondary,
    marginVertical: 15,
    marginLeft:0,
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
    fontFamily: 'Karla'
  },
  image: {
    width:100,
    height:100,
    borderRadius:100,
    marginTop:10
  }
})