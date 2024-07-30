import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MarkFound = () => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = () => {
    console.log('Marked as found:', { name, details });
    alert('Person marked as found');
    setName('');
    setDetails('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mark Person as Found</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Current Location and Condition"
        value={details}
        onChangeText={setDetails}
        multiline
      />
      <Button title="Mark as Found" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default MarkFound;