import { FlatList, StyleSheet, View } from 'react-native'
import React, {useEffect} from 'react';
import OrderItem from '../Components/OrderItem';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders } from '../Features/Orders';
import { SafeAreaView } from 'react-native-safe-area-context';

const renderItem = ({item}) => (
    <OrderItem 
        item={item}
    />
)

const OrdersScreen = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.value.user.userId);
    const orders = useSelector(state => state.orders.value.orders);
    const orderSelected = orders.filter(order => userId === order.userId.userId);

     useEffect(() => {
        dispatch(getOrders());
     }, []);

  
    console.log(orderSelected);
  return (
    <SafeAreaView style={styles.container}>
    <View >
        <FlatList 
            data={orderSelected}
            keyExtractor = {item => item.id}
            renderItem ={renderItem}
        />     
    </View>
</SafeAreaView>
  )
}
export default OrdersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical:10,
        marginBottom:150
    },

})