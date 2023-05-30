import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const ExperienceBar = ({ level, currentXP, maxXP }) => {
  // Calculate the progress percentage
  const progress = currentXP / maxXP;

  return (
    <View style={styles.container}>
      <Text style={styles.level}>Level {level}</Text>
      <Text style={styles.xp}>{currentXP} / {maxXP}</Text>
      <ProgressBar
        progress={progress}
        width={200}
        height={10}
        color="#7b3911"
        unfilledColor="#ddd"
        borderWidth={0}
        borderRadius={5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  level: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  xp: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default ExperienceBar;