import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../../../Styles/colors';
import CartScreen from '../../../Screens/CartScreen';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signIn } from '../../../Features/Auth';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const CartStack = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogout = () => {
    setEmail("");
    setPassword("");
    console.log(email);
    dispatch(signIn({email:email, password:password}))
  }
  return (
    <Stack.Navigator initialRouteName='' 
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.colorPrimary
      },
      headerTitleStyle: {
        fontFamily: 'Karla',
        fontSize:25,
      },
      headerTitleAlign:'center'
    }}>
     
       <Stack.Screen 
      name="Cart" 
      component={CartScreen} 
      options={{
        title: "Carrito",
        headerLeft: () => {
          return (
              <TouchableOpacity onPress={handleLogout}>
                  <FontAwesome5 name="user-alt" size={24} color="black" />
                  <Text>Logout</Text>
              </TouchableOpacity>
          )
      }  
      }}>

      </Stack.Screen>

    </Stack.Navigator>
  )
}

export default CartStack
