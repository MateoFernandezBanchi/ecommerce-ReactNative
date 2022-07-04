import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import PlaceItem from '../Components/PlaceItem'
import { useDispatch, useSelector } from 'react-redux'
import { getLocations } from '../Features/Locations'


const renderItem = ({item}) => {
  return (
    <PlaceItem
      onSelect={() => {}}
      title = {item.title}
      image = {item.picture}
      address = "Sagitario 264"
    />
  )
}

const LocationsScreen = () => {
 const dispatch = useDispatch();
  const  location  = useSelector(state => state.location.value.locations)

  console.log(location);
  useEffect(() => {
    dispatch(getLocations())
  },[])

  return (
    <View style={{flex: 1}}>
      {location.length > 0 ?    <FlatList
        data={location}
        renderItem={renderItem}
        keyExtractor={location => location.id}
      />: 
      <View style={styles.message}>
         <Image
                    source={{uri:'https://3.bp.blogspot.com/-xcJgY7hVjmI/WJae4JDJZ_I/AAAAAAAGuk8/cKGhUf1HkwUYRqVO2FxIrQVq2rJrMk-VACLcB/w1200-h630-p-k-no-nu/FLECHA2.png'}}
                    style={styles.image}
                    resizeMode="cover"
                />
        <Text style={styles.text}>Aun no has guardado direcciones ¡Prueba pulsar el boton + !</Text>  
      </View>}
   
    </View>
  )
}

export default LocationsScreen

const styles = StyleSheet.create({
  message: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    marginHorizontal:20,
    textAlign: 'center',
    fontSize:20,
    fontFamily:'Karla',
    fontWeight:'bold',
  },
  image: {
    width:300,
    height:300,
    resizeMode: 'contain'
  }
})