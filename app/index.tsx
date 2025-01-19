import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, Redirect } from 'expo-router';
import { StyleSheet, Dimensions } from 'react-native';

const Home = () => {
  const router = useRouter();

  const toLogin = async () => {
    try {
      console.log('navigating');
      router.replace('/login');
    } catch (err) {
      console.error('Error clearing onboarding:', err);
    }
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity onPress={toLogin} style={styles.button}>
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>Sign up to explore more!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#555',
  },
});

export default Home;
