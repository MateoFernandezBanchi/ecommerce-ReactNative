import { StyleSheet} from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../../../Screens/CategoriesScreens';
import ProductsScreen from '../../../Screens/ProductsScreens';
import DetailScreens from '../../../Screens/DetailScreens';
import { colors } from '../../../Styles/colors';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signIn } from '../../../Features/Auth';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
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

    <Stack.Navigator initialRouteName='Categories' 
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
        name="Categories" 
        component={CategoriesScreen} 
        options={{
          title:"Categorias",
          headerLeft: () => {
            return (
                <TouchableOpacity onPress={handleLogout}>
                    <FontAwesome5 name="user-alt" size={24} color="black" />
                    <Text>Logout</Text>
                </TouchableOpacity>
            )
        }  
        } }
         />
      <Stack.Screen 
        name="Products" 
        component={ProductsScreen}
        options={({route}) => ({
          title: route.params.categoryTitle,
        })} /> 
        
      <Stack.Screen 
      name="Detail" 
      component={DetailScreens} 
      options={({route}) => ({
        title: route.params.productTitle,
      })} />
    </Stack.Navigator>

  )
}

export default ShopNavigator;

const styles = StyleSheet.create({})