import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../../../Styles/colors';
import AuthScreen from '../../../Screens/AuthScreen';
import LoginScreen from '../../../Screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
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
          name= "Auth"
          component={AuthScreen}
          options={{
            title: "Auth"
          }}
        >
        
        
        </Stack.Screen> 
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options = {({route}) => ({
            title: "Login",
          })}
        >

        </Stack.Screen>
    </Stack.Navigator>
  )
}

export default AuthStack
