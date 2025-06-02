import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

export default function AddCountry({ addCountry, navigation }) {
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = () => {
    if (name && currency) {
      addCountry({ name, currency });
      setName('');
      setCurrency('');
      if (navigation) navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Countries</Text>
      <TextInput
        placeholder="Country Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholderTextColor="#888"
      />
      <TextInput
        placeholder="Currency Type"
        value={currency}
        onChangeText={setCurrency}
        style={styles.input}
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Country</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  header: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#fff',
    color: '#222',
    marginBottom: 20,
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: '#666666',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});