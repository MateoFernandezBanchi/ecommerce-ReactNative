import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlaceItem from '../Components/PlaceItem'
import { useSelector } from 'react-redux'

const renderItem = ({item}) => {
  return (
    <PlaceItem
      onSelect={() => {}}
      title = {item.title}
      image = {item.picture}
      address = "Sagitario 200"
    />
  )
  console.log(item.picture);
}

const LocationsScreen = () => {
 
  const { location } = useSelector(state => state.location.value)

  console.log(location);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={location}
        renderItem={renderItem}
        keyExtractor={location => location.id}
      />
    </View>
  )
}

export default LocationsScreen

const styles = StyleSheet.create({})