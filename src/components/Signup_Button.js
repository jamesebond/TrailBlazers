import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

const Signup_Button = ({title, onPress}) => {

    return (
        <TouchableOpacity activeOpacity={0.4} onPress={onPress} style={styles.butt}>
            <Text style={styles.buttText}>{title}</Text>
        </TouchableOpacity>
    )
}
export default React.memo(Signup_Button);

const styles = StyleSheet.create({
    butt: {
        backgroundColor: '#7B3911',
        padding: 16,
        width: 330,
        height: 60,
        borderRadius: 26,
        marginTop: 60,
        marginBottom: 20,
        alignItems: 'center',
        marginTop: 30,

    },
    buttText: {
        fontSize: 21,
        color: '#FFFFFF',
        fontFamily: 'Al Nile',
        textAlign: 'center'
    }
})