import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../../../Styles/colors';
import CartScreen from '../../../Screens/CartScreen';

const Stack = createNativeStackNavigator();

const CartStack = () => {
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
        title: "Carrito"
      }}>

      </Stack.Screen>

    </Stack.Navigator>
  )
}

export default CartStack
