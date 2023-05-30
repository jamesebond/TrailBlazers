// Button.js
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Button = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="sword-outline" size={30} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#7b3911',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
