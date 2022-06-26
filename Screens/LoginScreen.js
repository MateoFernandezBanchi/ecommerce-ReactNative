import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../Styles/colors';
import Input from '../Components/Input';
import {useDispatch} from "react-redux";
import { signIn } from '../Features/Auth';
import { schemaEmail, schemaPassword } from '../Utils/validateSchemas';
import { TouchableOpacity } from 'react-native';

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const dispatch = useDispatch() 

    const handleSignIn = () => {
        dispatch(signIn({email:email, password:password}))
    };
    const handleLogin = () => {
        navigation.goBack(); 
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>    
                <Text style={styles.title}>Login</Text>  
                <Input label="Email" password={false} onChange={setEmail} value= {email} error={emailError}/>
                <Input label="Password" password={true} onChange={setPassword} value= {password} error={passwordError}/>
                <Button title="SignIn" onPress={handleSignIn}/>
                
                <Text style={styles.logged}>No posees cuenta?  
                    <TouchableOpacity onPress={handleLogin}> 
                        <Text style={styles.loggedYes}>Registrate!</Text> 
                    </TouchableOpacity> 
                </Text> 
                  
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
        color: 'blue',
        paddingHorizontal:5,
    }
    

})