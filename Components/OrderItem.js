import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors';
import { FlatList } from 'react-native';

const RenderProducts = ({item}) => {
    return (
        <View>
            <Text style={styles.text}>Producto: {item.description} - {item.quantity}</Text>
        </View>
    )
}

const OrderItem = ({ item }) => {
    console.log(item);
    const itemSelected = item.items
    return (
        <View>
            {/* <View>
                <Text style={styles.header}>{item.id}</Text>
            </View> */}
            <View style={styles.order}>
                <View>
                    <Text style={styles.text}>{item.date}</Text>
                <View>
                    <FlatList 
                      data={itemSelected}
                      keyExtractor = {item => item.id}
                      renderItem ={RenderProducts}
                    />
                </View>
                    <Text style={styles.total}>Total ${item.total}</Text>
            </View>

            </View>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    order: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor:'black',
        borderWidth: 3,
        borderColor:colors.colorSecondary,
      
    },
   
    text: {
        fontSize: 18,
        fontFamily: 'Karla',
        color:'white',
    },
    total: {
        fontSize: 18,
        fontFamily: 'Karla',
        color:'white',
        fontWeight:'bold'
    }
})