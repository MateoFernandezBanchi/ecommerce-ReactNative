import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../Styles/colors';
import Input from '../Components/Input';
import {useDispatch} from "react-redux";
import { signUp } from '../Features/Auth';
import { TouchableOpacity } from 'react-native';
import {Formik} from 'formik';
import loginValidationSchema from '../Utils/validationYup'

const AuthScreen = ({navigation}) => {

    const [passwordError, setPasswordError] = useState("");
    const dispatch = useDispatch() 

    const handleLogin = () => {
         navigation.push('Login') 
    }
    const handleSubmit = (values) => {
        console.log(values);
        console.log("Se submiteo un form válido");

            if (values.password === values.confirmPassword) {
                console.log("Se registra!");
                dispatch(signUp({ email: values.email, password: values.password }));
            } else {
                setPasswordError("Los passwords deben coincidir");
            }
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>    
                <Text style={styles.title}> Registrarse </Text>
                <Formik 
                    onSubmit={handleSubmit}
                    initialValues={{email: "", password: "", confirmPassword: ""}}
                    validationSchema = {loginValidationSchema}
                    validateOnChange = {false}
                    validateOnBlur = {false}
                >   
                {({handleChange, errors, handleSubmit, values, handleBlur}) => (  
                    <>
                <Input styles={styles.input} label="Email" password={false} onChange={handleChange('email')} value= {values.email} onBlur={handleBlur('email')}/>
                <Input label="Contraseña" password={true} onChange={handleChange('password')} value={values.password} error={errors.password} onBlur={handleBlur('password')}/>
               
                <Input label="Confirmar Contraseña" password={true} onChange={handleChange('confirmPassword')} value={values.confirmPassword} onBlur={handleBlur('confirmPassword')} error={passwordError}/>
                <Button title="Registrarse" onPress={handleSubmit}/>
                
                <Text style={styles.logged}>ya posees cuenta?  
                    <TouchableOpacity onPress={handleLogin}> 
                        <Text style={styles.loggedYes}>Inicia sesion</Text> 
                    </TouchableOpacity> 
                </Text> 
                </>
                )}
                </Formik>  
            </View>
        </View>
    )
}

export default AuthScreen

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
    },
    input: {
        color:'black'
    }
    

})