import React from "react";
import { Image, Text, View, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import Signup_Button from "../components/Signup_Button";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
    const navigation = useNavigation();
    function onSignup() {
        navigation.navigate('Signup');
    }

    function onLogin() {
        navigation.navigate('Login');
    }
    return (
        <View style={styles.container}>
            
            <Image resizeMode='contain' style={styles.image} source={require('../assets/logo.png')}/>
            <Signup_Button onPress={onSignup} title='Create Account' />
            <Pressable onPress={onLogin} hitSlop={20}>
                <Text style={{fontSize: 20, color: '#7B3911'}}>Log In</Text>
            </Pressable>

        </View>
    )
}
export default Welcome;

const styles = StyleSheet.create({
    container: {
        padding: 100,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFE9E0'
    }, 

    image: {
        width: 400,
        height: 400,
    },

    text: {
        fontSize: 40,
        fontFamily: 'Al Nile',
        color: '#16308E'
    }
})