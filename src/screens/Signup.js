import React, { useContext, useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import Signup_Button from '../components/Signup_Button'
import { StyleSheet } from "react-native";
import Input from "../components/Input"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AuthContent from "../components/AuthContent";
import { createUser } from "../util/auth";
import { AuthContext } from "../store/auth-context";

export function Signup () {
    
    const[isAuthenticating, setIsAuthenticationg] = useState(false);
    const authcontext = useContext(AuthContext);

    async function signUpHandler({email, password}) {
        try {
            setIsAuthenticationg(true);
            const token = await createUser(email, password); 
            authcontext.authenticate(token);
            setIsAuthenticationg(false);
        } catch (error) {
            Alert.alert('Authentication failed', 'Please check your credentials')
        }
        
    }
    return (
        <AuthContent onAuthenticate={signUpHandler}/>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 50,
        flexDirection: 'column',
        alignItems: 'center',
    }, 

})