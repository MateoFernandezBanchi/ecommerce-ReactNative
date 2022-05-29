
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = ({title = "Tienda de Bebidas"}) => {
  return (
    <SafeAreaView>
    <View style={styles.container} >
      <Text style={styles.text}>{title}</Text>
    </View>
    </SafeAreaView>
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