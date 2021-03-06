import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../Styles/colors';
import CartItem from '../Components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { confirmPurchase, removeItem, removeCart } from '../Features/Cart';
import {getOrders} from'../Features/Orders';


const CartScreen = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.value.user.userId);
    const {cart} = useSelector(state => state.cart.value);
    const cartArray = useSelector(state => state.cart.value.cart);
    const subTotalArray1 = cartArray.filter (item => item.quantity > 1);
    const subTotalArray2 = cartArray.filter (item => item.quantity == 1);
    let total = 0; 
    let subTotal1 = 0;
    let subTotal2 = 0;
    if (subTotalArray1) {
        subTotalArray1.forEach(item => { subTotal1 += item.price * item.quantity; });
        subTotalArray2.forEach((product)=> {subTotal2 += product.price});
        total = subTotal1 + subTotal2;
    } else {
        cartArray.forEach((product)=> {total += product.price}); 
    }
    console.log(userId);
    const  handleConfirm =  () => {
        dispatch(removeCart());
        dispatch(confirmPurchase({userId:{userId}, items:cart, total:total}));
        dispatch(getOrders());

    };
    const handleDelete = (id) => {
        dispatch(removeItem({id:id}));
    };
    const renderItem = (data) => {
        console.log (data);
        return(
        <CartItem item={data.item} onDelete={handleDelete}/>)
    }
    
  return (
    <View style={styles.container}>
        
        {cart.length > 0 ?<> 
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
        </View></>: 
        <View style={styles.list}>
            <Text style={styles.message}>No hay productos en el carrito</Text>
        </View>}
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
        borderTopColor: colors.colorPrimary,
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: colors.colorPrimary,
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
    },
    message: {    
        color: 'white',
        margin:40,
        fontFamily: 'Karla',
        fontSize: 18,
        textAlign: 'center',
    }
})