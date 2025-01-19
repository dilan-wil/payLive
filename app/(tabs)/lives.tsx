import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LivesScreen() {
  const router = useRouter()

  const toCreate = async () => {
    try {
      console.log('navigating');
      router.replace('/create-live');
    } catch (err) {
      console.error('Error clearing onboarding:', err);
    }
  };

  const toJoin = async () => {
    try {
      console.log('navigating');
      router.replace('/joinlive');
    } catch (err) {
      console.error('Error clearing onboarding:', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Sales</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.createButton]}
          onPress={toCreate}
        >
          <Ionicons name="add-circle-outline" size={48} color="white" />
          <Text style={styles.buttonText}>Create Live Sale</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.joinButton]}
          onPress={toJoin}
        >
          <Ionicons name="log-in-outline" size={48} color="white" />
          <Text style={styles.buttonText}>Join Live Sale</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  createButton: {
    backgroundColor: '#4a90e2',
  },
  joinButton: {
    backgroundColor: '#50c878',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});

