import { StyleSheet, Text, TextInput, TouchableOpacity,Keyboard, View, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react';
import Searcher from '../Components/Searcher';
import { Entypo } from '@expo/vector-icons';
// import { PRODUCTS } from '../Data/Products';
// import Header from '../Components/Header';
import { colors } from '../Styles/colors';
import List from '../Components/List';
import { useDispatch, useSelector } from 'react-redux';
import { setProductSelected } from '../features/products';

const ProductsScreen = ({navigation, route}) => {
    const {products} = useSelector(state => state.products.value);
    const [input, setInput] = useState("");
    // const [initialProducts, setInitialProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([]);
    const {productsByCategory} = useSelector(state => state.products.value);
    const dispatch = useDispatch();
    const {categoryId} = route.params;

    const handleErase = () => {
        setInput("")
    }
    useEffect(()=> {
        if(productsByCategory.length !== 0){
            if (input === "") setProductsFiltered(productsByCategory)
            else {
                const productosFiltrados = productsByCategory.filter(product => product.description.toLowerCase().includes(input.toLowerCase()))
                setProductsFiltered(productosFiltrados)
            }
        }
    }, [input, productsByCategory])

    // useEffect(()=>{
    //     const productosIniciales = products.filter(product => product.category === categoryId)
    //     setInitialProducts(productosIniciales);
    // }, [categoryId])

    const handleDetailProduct = (product) => {
        console.log(product);
        dispatch(setProductSelected(product.id))
        // dispatch(setProductsFiltered(product.id));
        navigation.push("Detail", {
            productId: product.id,
            productTitle: product.description,
        }); }

    const handleBack = () => {
        navigation.goBack();
    }
    return (
        <>
        <KeyboardAvoidingView
        //  behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={styles.keyboardAvoid}
         keyboardVerticalOffset={10}
       >
            {/* <Header title={category.category}/> */}
             <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
    
            <View style={styles.container}>
                <Searcher additionalStyles={{
                    backgroundColor: colors.colorPrimary
                }}>
                    <TextInput
                        value={input}
                        onChangeText={setInput}
                        keyboardType="default"
                        style={styles.input}
                        placeholder = "¿Que producto desea llevar?"
                    />
                    <TouchableOpacity onPress={handleErase}>
                        <Entypo name="erase" size={30} color="black" />
                    </TouchableOpacity>
                </Searcher>
                <View style={styles.listContainer}>
                    <List style={styles.listItems} data={productsFiltered} itemType ={"Producto"} onPress={handleDetailProduct}/>
                    <TouchableOpacity style={styles.button} onPress={handleBack}>
                        <Text style={styles.button}>Volver</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
              </TouchableWithoutFeedback> 
         </KeyboardAvoidingView>
         </>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    keyboardAvoid: {
        flex: 1,
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    input: {
        width: '80%',
        padding: 10,
        margin: 10,
        backgroundColor: 'black',
        borderRadius: 10,
        color: 'white',
        height: 50,
    },
    listContainer:{
        flex: 1,
        alignItems: 'center',
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