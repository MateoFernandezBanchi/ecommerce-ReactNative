import { StyleSheet} from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../../Screens/CategoriesScreens';
import ProductsScreen from '../../Screens/ProductsScreens';
import DetailScreens from '../../Screens/DetailScreens';
import { colors } from '../../Styles/colors';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
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
          title:"Categorias"  
        } } />
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
  </NavigationContainer>
  )
}

export default MainNavigator;

const styles = StyleSheet.create({})