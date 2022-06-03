import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigatorLogged from './Tabs/UserLogged';
import LoginScreen from '../Screens/LoginScreen';


const MainNavigator = () => {
  const user = true;
  return (
    <NavigationContainer>
      {user? 
        <TabNavigatorLogged/>
        : <LoginScreen/>}
    </NavigationContainer>
  )
}

export default MainNavigator
