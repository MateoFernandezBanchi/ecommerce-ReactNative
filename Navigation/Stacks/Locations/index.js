import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../../../Styles/colors';
import CartScreen from '../../../Screens/CartScreen';
import LocationsScreen from '../../../Screens/LocationsScreen';
import { Ionicons } from '@expo/vector-icons';
import SaveLocationScreen from '../../../Screens/SaveLocationScreen';

const Stack = createNativeStackNavigator();

const LocationStack = () => {
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
      name="Locations" 
      component={LocationsScreen} 
      options={({navigation}) => ({
        title: "Direcciones",
        headerRight: () => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('SaveLocation')}>
                    <Ionicons name="add-circle-sharp" size={24} color="black" />
                </TouchableOpacity>
            )
        }
      })}>
      </Stack.Screen>
      <Stack.Screen 
      name="SaveLocation" 
      component={SaveLocationScreen} 
      options={{
        title: "Direcciones Guardadas",
      }}>
      </Stack.Screen>

    </Stack.Navigator>
  )
}

export default LocationStack
