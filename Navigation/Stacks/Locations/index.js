import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../../../Styles/colors';
import CartScreen from '../../../Screens/CartScreen';
import LocationsScreen from '../../../Screens/LocationsScreen';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import SaveLocationScreen from '../../../Screens/SaveLocationScreen';
import { signIn } from '../../../Features/Auth';
import { useDispatch } from 'react-redux';

const Stack = createNativeStackNavigator();

const LocationStack = () => {
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
        },
        headerLeft: () => {
          return (
              <TouchableOpacity onPress={handleLogout}>
                  <FontAwesome5 name="user-alt" size={24} color="black" />
                  <Text>Logout</Text>
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
