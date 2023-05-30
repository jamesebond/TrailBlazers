import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
import { launchImageLibrary } from 'react-native-image-picker';

export default function UploadImage() {
  
    const [selectedImage, setSelectedImage] = useState(null);

  const changePhoto = () => {
    const options = {
      noData: true,
    };

    launchImageLibrary(options, (response) => {
      if (!response.didCancel) {
        // The user selected an image
        const { uri, fileName, type } = response;

        // Set the selected image in the component's state
        setSelectedImage({ uri, fileName, type });
      } else {
        // The user cancelled the selection
        console.log("Image selection cancelled.");
      }
    });
  };



  return (
            // <View style={imageUploaderStyles.container}>
            //     {
            //         <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
            //     }
            //         <View style={imageUploaderStyles.uploadBtnContainer}>
            //             <TouchableOpacity onPress={changePhoto} style={imageUploaderStyles.uploadBtn} >
            //                 <Text>{image ? 'Edit' : 'Upload'} Image</Text>
            //             </TouchableOpacity>
            //         </View>
            // </View>
        <View style={imageUploaderStyles.container}>
            {<Image source={{ uri : selectedImage }} style={{ width: 300, height: 300 }}/>}
            <View style={imageUploaderStyles.uploadBtnContainer}>
              <TouchableOpacity onPress={changePhoto}>
                <Text style={imageUploaderStyles.text}>Add Photo</Text>
              </TouchableOpacity>
            </View>
        </View>
  );
}

const imageUploaderStyles=StyleSheet.create({
    container:{
        elevation:4,
        height:300,
        width:300,
        backgroundColor:'#efefef',
        position:'relative',
        overflow:'hidden',
        alignItems: 'center'
    },
    inside: {
        alignItems: 'center'
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'18%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    },
    text: {
        alignSelf: 'center',
        padding: 5,
        fontSize:20,
    }
})