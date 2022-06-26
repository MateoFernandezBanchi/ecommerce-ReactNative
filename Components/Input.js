import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors'

const Input = ({label, password=false, onChange, value, error = null}) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput 
      style = {styles.Input}
      onChangeText = {onChange}
      secureTextEntry={password}
      value={value}
      />
      
     {error ? <Text style={styles.error}>{error}</Text> : null}
     
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

  },
  error: {
    color:'red',
    textAlign:'center',
    fontSize:14,
    fontFamily:'Karla',
    marginBottom: 6,
  }
})