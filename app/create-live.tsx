import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';

export default function CreateLiveScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const router = useRouter()

  const handleSubmit = () => {
    // Here you would typically handle the form submission
    console.log('Creating live sale:', { title, description, startTime });
    // You might want to navigate back to the Lives screen or show a success message
    router.back()
  };

  const onChangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || startTime;
    setShowDatePicker(false);
    setStartTime(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Live Sale</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TouchableOpacity style={styles.dateButton} onPress={() => setShowDatePicker(true)}>
        <Text>Select Start Time: {startTime.toLocaleString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={startTime}
          mode="datetime"
          display="default"
          onChange={onChangeDate}
        />
      )}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Create Live Sale</Text>
      </TouchableOpacity>
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
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  dateButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

