import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location';
import { API_KEY } from '../Constants/googleApi';
import { SafeAreaView } from 'react-native-safe-area-context';

const GetLocationScreen = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});

      setLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      })
    })();

  }, []);

  useEffect(() => {
    if (location?.lat) {

      (async () => {
        setPhoto(`https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=400x400&maptype=roadmap&markers=color:red%7Clabel:C%7C${location.lat},${location.lng}&key=${API_KEY}`)
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY}`)
        const reverseGeocode = await response.json()
        const address = reverseGeocode.results[0].formatted_address;
        setAddress(address);
      })()
      
    }
  }, [location])

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const handleConfirmLocation = () => {
    navigation.navigate("SaveLocation", {address})
  }

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <View>
        {photo ?
          <Image
            source={{ uri: photo }}
            style={{ width: 400, height: 300 }}
          />
          : null
        }
        {
          address ?
          <>
            <Text>{address}</Text>
            <TouchableOpacity style={styles.button} onPress={handleConfirmLocation}><Text style={styles.text}>Confirmar Direccion</Text></TouchableOpacity>
          </>
          :
          null
        }
      </View>
    </View>
    </SafeAreaView>
  );
}

export default GetLocationScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginBottom:20,
  },
  button: {
    width: 300,
    height:50,
    backgroundColor:'black',
    borderRadius:10,
    textAlign:'center',
    color: 'white',
    paddingTop:3,
    marginVertical:10,
    display: 'flex',
    justifyContent: 'center',  
},
text: {
  color: 'white',
  textAlign:'center',

}
})