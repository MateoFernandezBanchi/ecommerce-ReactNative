import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrdersScreen from '../../../Screens/OrdersScreen';
import { colors } from '../../../Styles/colors';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signIn } from '../../../Features/Auth';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const OrdersStack = () => {
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
    <Stack.Navigator initialRouteName=""
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.colorPrimary
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontFamily: "Karla",
            fontSize: 28,
          },
          headerTitleAlign: "center",
 
        }}
      >
        <Stack.Screen
          name= "Orders"
          component={OrdersScreen}
          options={{
            title: "Ordenes",
            headerLeft: () => {
              return (
                  <TouchableOpacity onPress={handleLogout}>
                      <FontAwesome5 name="user-alt" size={24} color="black" />
                      <Text>Logout</Text>
                  </TouchableOpacity>
              )
          }  
          }}
        >
        
        </Stack.Screen> 
    
    </Stack.Navigator>
  )
}

export default OrdersStack
