import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../Styles/colors';
// import { PRODUCTSELECTED } from '../Data/ProductSelected'
import CartItem from '../Components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { confirmPurchase } from '../Features/Cart';

const handleDelete = (id) => console.log ('se elimina del carrito el producto con id: ${id}');
const renderItem = (data) => {
    console.log (data);
    return(
    <CartItem item={data.item} onDelete={handleDelete}/>)
}
const CartScreen = () => {
    const dispatch = useDispatch();
    
   
   
    const {cart} = useSelector(state => state.cart.value);
    console.log(cart);
    const handleConfirm = () => {
        dispatch(confirmPurchase(cart))
    };
    const total = 12000; 

  return (
    <View style={styles.container}>
       <View style={styles.list}>
           <FlatList 
              data={cart}
              keyExtractor ={item => item.id}
              renderItem={renderItem}
           />
       </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.confirm} onPress={handleConfirm}>
                <Text>Confirmar</Text>
                <View style={styles.total}>
                    <Text style={styles.text}>Total</Text>
                    <Text style={styles.text}>${total}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        paddingBottom: 120,
    },
    list: {
        flex: 1,
        backgroundColor:'black'
    },
    footer: {
        padding: 12,
        borderTopColor: colors.beige,
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: colors.beige,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    total: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        fontFamily: 'Karla',
        padding: 8,
        color: 'black'
    }
})