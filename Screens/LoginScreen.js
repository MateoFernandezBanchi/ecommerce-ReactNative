import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../Styles/colors';
import Input from '../Components/Input';
import {useDispatch} from "react-redux";
import { signIn } from '../Features/Auth';
import { TouchableOpacity } from 'react-native';
import {Formik} from 'formik';
import loginValidationSchema from '../Utils/validationYup';

const LoginScreen = ({navigation}) => {

    const dispatch = useDispatch() 

    const handleSubmit= (values) => {
        dispatch(signIn({email:values.email, password:values.password}))
    };
    const handleLogin = () => {
        navigation.goBack(); 
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>    
                <Text style={styles.title}>Iniciar Sesion</Text>
                <Formik 
                    onSubmit={handleSubmit}
                    initialValues={{email: "", password: "", confirmPassword: ""}}
                    validationSchema = {loginValidationSchema}
                    validateOnChange = {false}
                    validateOnBlur = {false}
                >   
                {({handleChange, errors, handleSubmit, values, handleBlur}) => (  
                    <>  
                <Input label="Email" password={false} onChange={handleChange('email')} value= {values.email} onBlur={handleBlur('email')}/>
                <Input label="Contraseña" password={true} onChange={handleChange('password')} value={values.password} error={errors.password} onBlur={handleBlur('password')}/>
                <Button title="Iniciar Sesion" onPress={handleSubmit}/>
                
                <Text style={styles.logged}>No posees cuenta?  
                    <TouchableOpacity onPress={handleLogin}> 
                        <Text style={styles.loggedYes}>Registrate!</Text> 
                    </TouchableOpacity> 
                </Text> 
                </>
                )}
                </Formik>  
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.colorPrimary
    },
    content: {
        padding: 20,
        backgroundColor: 'black',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        width: '80%',
    },
    title: {
        fontFamily: 'Karla',
        fontSize: 24,
        textAlign: 'center',
        marginBottom:10,
        fontWeight: 'bold',
        color: colors.colorPrimary
    },
    logged: {
        color: 'white',
        textAlign: 'center',
        fontSize:18,
        marginVertical:15
    },
    loggedYes: {
        color: colors.lightBlue,
        paddingHorizontal:5,
    }
    

})