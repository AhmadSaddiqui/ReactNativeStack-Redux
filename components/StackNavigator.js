import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Login Screen
function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Button 
        title="Go to Home" 
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
}

// Home Screen with Text Input
function HomeScreen({ navigation }) {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter some text"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button 
        title="Go to Third Screen" 
        onPress={() => navigation.navigate('Third', { inputText })} 
      />
    </View>
  );
}

// Third Screen to Display Input
function ThirdScreen({ route }) {
  const { inputText } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Third Screen</Text>
      <Text style={styles.displayText}>You entered: {inputText}</Text>
    </View>
  );
}

// Custom Header for Stack Navigation
const screenOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: '#6200EE',
  },
  headerTintColor: '#FFF',
  headerTitleAlign: 'center',
  headerRight: () => (
    <TouchableOpacity style={styles.headerButton} onPress={() => alert('Right Button Clicked!')}>
      <Text style={styles.headerButtonText}>Right</Text>
    </TouchableOpacity>
  ),
  headerLeft: () => (
    <TouchableOpacity style={styles.headerButton} onPress={() => navigation.goBack()}>
      <Text style={styles.headerButtonText}>Left</Text>
    </TouchableOpacity>
  ),
});

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#6200EE',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  displayText: {
    fontSize: 18,
    color: '#6200EE',
  },
  headerButton: {
    marginHorizontal: 10,
  },
  headerButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
