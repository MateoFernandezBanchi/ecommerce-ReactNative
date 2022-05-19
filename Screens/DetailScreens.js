import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { PRODUCTS } from '../Data/Products'


const DetailScreen = ({ route, navigation
}) => {

    const {productId} = route.params;
    const { height, width } = useWindowDimensions();
    const [orientation, setOrientation] = useState("portrait");
    const [product, setProduct] = useState({});

    useEffect(() => {
        setOrientation(height > width ? "portrait" : "landscape")
    }, [height, width])

    const handleBack = () => {
        navigation.goBack();
    }

    useEffect(() => {
        const productSelected = PRODUCTS.find(product => product.id === productId)
        setProduct(productSelected)
    }, [productId])
    return (
        <>
            { 
           product && 
            <View style={orientation === "portrait" ? styles.containerVertical : styles.containerHorizontal}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text>{product.description}</Text>
                <Text>$ {product.price}</Text>
                <TouchableOpacity style={styles.button} onPress={handleBack}>
                        <Text style={styles.button}>Volver</Text>
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
        width: 100,
        height:30,
        backgroundColor:'black',
        borderRadius:30,
        textAlign:'center',
        color: 'white',
        paddingTop:3
    }
})