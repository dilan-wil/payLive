import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function JoinLiveScreen() {
    const [saleCode, setSaleCode] = useState('');
    const router = useRouter()

    const handleSubmit = () => {
        // Here you would typically handle joining the live sale
        console.log('Joining live sale with code:', saleCode);
        // You might want to navigate to the live sale screen or show a loading state
        router.back()
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Join Live Sale</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter the live sale code"
                value={saleCode}
                onChangeText={setSaleCode}
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Join Live Sale</Text>
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
    submitButton: {
        backgroundColor: '#50c878',
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

