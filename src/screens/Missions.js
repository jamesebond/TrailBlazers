import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';

const missions = [
  {
    title: 'Daily Mission',
    description: 'Share a food post',
    progress: 0,
  },
  {
    title: 'Daily Mission',
    description: 'Walk 5000 steps',
    progress: 0.3,
  },
  {
    title: 'Weekly Mission',
    description: 'Make 3 posts of places you haven\'t been to before',
    progress: 0.33,
  },
];

const MissionComponent = ({ onClose }) => {
  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          {missions.map((mission, index) => (
            <View key={index} style={styles.missionContainer}>
              <Text style={styles.title}>{mission.title}</Text>
              <Text style={styles.description}>{mission.description}</Text>
              <Progress.Bar
                styleAttr="Horizontal"
                indeterminate={false}
                progress={mission.progress}
                color="#7b3911"
              />
              <Text style={styles.progressCount}>
                Progress: {mission.progress * 100}%
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    maxHeight: '80%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7b3911',
  },
  missionContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  progressCount: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default MissionComponent;
