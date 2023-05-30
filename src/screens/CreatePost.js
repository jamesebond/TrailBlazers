import React from "react";
import { View } from "react-native";
import Input from "../components/Input";
import UploadImage from "../components/UploadImage";
import { StyleSheet } from "react-native";

export const CreatePost = () => {
    return (
        <View style={styles.container}>
            <UploadImage />
            <Input label='Caption' placeholder='eg. Best croissant I ever had in Paris!'/>
            <Input label='Location' placeholder='Tell others how to get there!' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 50,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFE9E0'
    }, 

})