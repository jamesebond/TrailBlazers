import React, { useContext } from "react";
import { useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import Signup_Button from "../components/Signup_Button";
import { StyleSheet } from "react-native";
import Input from "../components/Input"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AuthContent from "../components/AuthContent";
import { AuthContext } from "../store/auth-context";
import { login } from "../util/auth";
import { useNavigation } from '@react-navigation/native';


function Login() {

    const[isAuthenticating, setIsAuthenticationg] = useState(false);
    const authcontext = useContext(AuthContext);

    async function loginHandler({email, password}) {
        try {
            setIsAuthenticationg(true);
            const token = await login(email, password); 
            authcontext.authenticate(token);
            setIsAuthenticationg(false);
             navigation.navigate('ProfileScreen');
        } catch (error) {
            console.error(error);
            Alert.alert('Authentication failed!', 'Incorrect email or password')
        }
        
    }

        return (
          <SafeAreaProvider>
            <AuthContent isLogin onAuthenticate={loginHandler} />
          </SafeAreaProvider>
        );

}

export default Login;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 50,
        flexDirection: 'column',
        alignItems: 'center',
    }, 

})