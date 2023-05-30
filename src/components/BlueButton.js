import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

const BlueButton = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.butt}>
            <Text style={styles.buttText}>{title}</Text>
        </TouchableOpacity>
    )
}
export default BlueButton;

const styles = StyleSheet.create({
    butt: {
        backgroundColor: '#7B3911',
        width: 60,
        height: 30,
        borderRadius: 10,
        marginTop: 60,
        marginBottom: 20,
        marginRight:20,
        alignItems: 'center',
        marginTop: 30,

    },
    buttText: {
        fontSize: 10,
        color: '#FFFFFF',
        fontFamily: 'Al Nile',
        fontWeight:'bold',
        marginTop: 8,
    }
})