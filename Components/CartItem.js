import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors';
import {Ionicons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const CartItem = ({item, onDelete}) => {
  return (

    <View style={styles.item}>
      <View>
        <Text style={styles.header}>{item.description}</Text>
      </View>
      <View style={styles.detail}>
        <View>
          <Text style={styles.text}>Cantidad: {item.quantity}</Text>
          <Text style={styles.text}>${item.price}</Text>
        </View>
        <TouchableOpacity style={styles.trash} onPress={()=> onDelete(item.id)}>
        <Entypo styles={styles.trash} name="trash" size={24} color="white" />
        </TouchableOpacity>
      </View>

    </View>
    
  )
}

export default CartItem

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.beige
    },
    header: {
        fontSize: 18,
        fontFamily: 'Karla',
        color:'white'
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Karla',
        color:'white'
    },
    trash: {
      color:'white',
    }
})