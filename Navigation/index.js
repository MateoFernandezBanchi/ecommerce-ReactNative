import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigatorLogged from './Tabs/UserLogged';
import LoginScreen from '../Screens/LoginScreen';
import { useState } from 'react';


const MainNavigator = () => {
  const [user, setUser] = useState(true)
  return (
    <NavigationContainer>
      {user? 
        <TabNavigatorLogged/>
        : <LoginScreen/>}
    </NavigationContainer>
  )
}

export default MainNavigator
