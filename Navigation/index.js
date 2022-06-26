import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigatorLogged from './Tabs/UserLogged';
import AuthStack from './Stacks/Auth';
import { useSelector } from 'react-redux';

const MainNavigator = () => {
 const {user} = useSelector(state=> state.auth.value)


  return (
    <NavigationContainer>
      {user.userId ? 
        <TabNavigatorLogged/>
        : <AuthStack/>}
    </NavigationContainer>
  )
}

export default MainNavigator
