import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreens';
import ProductsScreen from './Screens/ProductsScreens';
import {useFonts} from 'expo-font';

export default function App() {

  const [categorySelected, setCategorySelected] = useState(null)

  const handleCategory = (category) => {
    setCategorySelected(category)
  }

  const [loaded] = useFonts({
    Karla: require('./assets/Fonts/static/Karla-Regular.ttf')
  });
  
  if (!loaded) {
    return <ActivityIndicator/>;
  }

  return (
    <View style={style.container}>
      { categorySelected ?
        <ProductsScreen category={categorySelected} handleCategory={handleCategory}/>
        :
        <CategoriesScreen handleCategory = {handleCategory}/>
      }
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
})