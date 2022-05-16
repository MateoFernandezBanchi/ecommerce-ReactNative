
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors'

const Header = ({title = "Tienda de Bebidas"}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.colorPrimary,
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: 'Karla'
    }
})