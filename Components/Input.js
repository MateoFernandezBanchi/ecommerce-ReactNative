import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors'

const Input = ({label, password=false, onChange, value}) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput 
      style = {styles.Input}
      onChangeText = {onChange}
      secureTextEntry={password}
      value={value}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  Input: {
    width: '100%',
    backgroundColor: colors.colorSecondary,
    marginVertical:15,
    height:30,
    color: 'black',
    padding:20,
    borderRadius:5,
    borderBottomColor: 'white',
    borderBottomWidth: 4,

  },
  text: {
      color:'white',
      textAlign:'center',
      fontSize:20,
      fontFamily:'Karla'

  }
})