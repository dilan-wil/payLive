import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>john.doe@example.com</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="settings-outline" size={24} color="gray" style={styles.optionIcon} />
          <Text style={styles.optionText}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="card-outline" size={24} color="gray" style={styles.optionIcon} />
          <Text style={styles.optionText}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="notifications-outline" size={24} color="gray" style={styles.optionIcon} />
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="help-circle-outline" size={24} color="gray" style={styles.optionIcon} />
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, styles.logoutOption]}>
          <Ionicons name="log-out-outline" size={24} color="red" style={styles.optionIcon} />
          <Text style={[styles.optionText, styles.logoutText]}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  optionsContainer: {
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionIcon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
  },
  logoutOption: {
    marginTop: 20,
  },
  logoutText: {
    color: 'red',
  },
});

