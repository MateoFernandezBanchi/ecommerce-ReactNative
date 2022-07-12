import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors'

const PlaceItem = ({onSelect, title, image, address}) => {
    console.log(image);
  return (
    <TouchableOpacity
        onPress={onSelect}
        style={styles.placeItem}
    >
        <Image 
            style={styles.image}
            source = {{uri: image}}
        />
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.address}>{address}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PlaceItem

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'grey'
    },
    info: {
        marginLeft: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        color: 'blue',
        fontSize: 18,
        marginBottom: 6,
    },
    address: {
        color: '#777',
        fontSize: 16,
    }
})