import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
} from 'react-native';

const Form = () => {
  // State to store form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [details, setDetails] = useState('');

  // Function to handle the submission of the form
  const handleShowDetails = () => {
    setDetails(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  };

  // Function to clear the form inputs
  const handleClear = () => {
    setName('');
    setEmail('');
    setPassword('');
    setDetails('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Simple Form</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />

      {/* Show Details Button */}
      <Button title="Show Details" onPress={handleShowDetails} />

      {/* Clear Inputs Button */}
      <Button title="Clear" onPress={handleClear} color="red" />

      {/* Display Details */}
      {details ? (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>{details}</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  detailsContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  detailsText: {
    fontSize: 16,
  },
});

export default Form;