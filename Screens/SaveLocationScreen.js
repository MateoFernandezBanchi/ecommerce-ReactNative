import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import { addLocation } from '../Features/Locations';

const SaveLocationScreen = () => {
    const [title, setTitle] = React.useState("");
    const [picture, setPicture] = React.useState("");
    const dispatch = useDispatch();
    const handleTakePicture = () => {

    }
    const handlePickLibrary = () => {

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