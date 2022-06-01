import { ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MainNavigator from './Navigation';
import { Provider } from 'react-redux';
import store from './Store';



export default function App() {

/*   const [categorySelected, setCategorySelected] = useState(null);
  const [productSelected, setProductSelected] = useState(null);
  const handleCategory = (category) => {
    // console.log(category);
    setCategorySelected(category)
  }
  const handleProduct = (product) => {
    // console.log(category);
    setProductSelected(product)
  } */
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