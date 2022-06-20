import { ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MainNavigator from './Navigation';
import { Provider } from 'react-redux';
import store from './Store';

import { init } from './db';

init()
.then(()=> {console.log('Db initialized');})
.catch((err)=> {
  console.log('Error loading db');
  console.log(err.message);
}) 

export default function App() {

  const [loaded] = useFonts({
    Karla: require('./assets/Fonts/static/Karla-Regular.ttf')
  });
  
  if (!loaded) {
    return <ActivityIndicator/>;
  }

  console.log(loaded);

  return (
    //<SafeAreaProvider>
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
    //</SafeAreaProvider>
  );
}