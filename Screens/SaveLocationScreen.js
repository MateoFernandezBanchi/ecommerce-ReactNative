import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImagePickerIOS, Image } from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import { addLocation } from '../Features/Locations';
import * as ImagePicker from 'expo-image-picker';

const SaveLocationScreen = () => {
    const [title, setTitle] = React.useState("");
    const [picture, setPicture] = React.useState("");
    const dispatch = useDispatch();

    const getPermission = async () => {
        const {status} = await ImagePicker.getMediaLibraryPermissionsAsync()
        console.log (status);
        if (status !== "granted") {
            return false;
    } return true;
}
const handleTakePicture = async () => {
    const isVerified = getPermission()
    if (!isVerified) {
        return;
    }
    const image = await ImagePicker.launchCameraAsync ({
        allowsEditing: true,
        aspect: [4,3],
        quality: 1,
    })
    setPicture(image.uri);
}

    const handlePickLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync ({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            alowsEditing: true,
            aspect: [4, 3],
            quality: 1,

        });
        console.log(result);

        if (!result.cancelled) {
            setPicture(result.uri);
        }
    }
    const handleConfirm = () => {
        dispatch(addLocation(title));
        setTitle("");
    }
  return (
    <View style={styles.container}> 
      <Text>Nueva Direccion</Text>
      <TextInput 
      value={title}
      onChangeText={setTitle}
      placeholder="Titulo"
      />
      {picture? 
      <Image source={{uri: picture}}
      style={styles.image}/>
      : null }
      <TouchableOpacity style={styles.button} onPress={handleTakePicture}><Text style={styles.text}>Tomar una foto</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePickLibrary}><Text style={styles.text}>Seleccionar de la galeria</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleConfirm}><Text style={styles.text}>Confirmar</Text></TouchableOpacity>
    </View>
  )
}

export default SaveLocationScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
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