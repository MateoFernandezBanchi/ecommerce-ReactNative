import { ActivityIndicator, StyleSheet } from 'react-native';
import {useFonts} from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigator from './Navigation/Shop';

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
    <SafeAreaView style={{ flex: 1 }}>
      <MainNavigator/>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
})