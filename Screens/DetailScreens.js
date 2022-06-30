import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, useWindowDimensions, Button } from 'react-native'
import React, {useState } from 'react'
import { addItem } from '../Features/Cart';
import { useDispatch, useSelector } from 'react-redux';


const DetailScreen = () => {
    const dispatch = useDispatch();
    const { height, width } = useWindowDimensions();
    const [orientation, setOrientation] = useState("portrait");
    const {productSelected} = useSelector(state => state.products.value)

    const handleAdd = (id) => {
        dispatch(addItem({id: id}))
    }

    return (
        <>
            { 
           productSelected && 
            <View style={orientation === "portrait" ? styles.containerVertical : styles.containerHorizontal}>
                <Image
                    source={{ uri: productSelected.image }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text style={styles.text}>{productSelected.description}</Text>
                <Text style={styles.price}>$ {productSelected.price}</Text>
                    <TouchableOpacity style={styles.button} onPress={()=>handleAdd(productSelected.id)}>
                        <Text style={{color:'white'}}>Add to Cart</Text>
                    </TouchableOpacity>
            </View>
            }
            </>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    containerVertical: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    containerHorizontal: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        width: 0.8 * Dimensions.get('window').width,
        height: 300,
        marginTop: 30,
    },
    button: {
        width: 150,
        height:40,
        backgroundColor:'black',
        borderRadius:15,
        textAlign:'center',
        color: 'white',
        paddingTop:2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginVertical:10,
        fontFamily: 'Karla',
    },
    price: {
        fontWeight:'bold',
        fontSize: 20,
        marginVertical:10,
        fontFamily: 'Karla',
    }
})