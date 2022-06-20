import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Styles/colors'
import Input from '../Components/Input'

const LoginScreen = () => {

    const [registroVista, setRegistroVista] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{registroVista ? "Registro": "Login"}</Text>
                <Input label="Email" password={false} onChange={setEmail} value= {email}/>
                <Input label="Password" password={true} onChange={setPassword} value= {password}/>
                <Input label="Confirm Password" password={true} onChange={setConfirmPassword} value= {confirmPassword}/>
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
    }
    

})