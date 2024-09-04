import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UseEffectPrac = () => {
  const [count, setCount] = useState(0);

  // useEffect for mount, update, and unmount
  useEffect(() => {
    console.log('Component mounted or updated');

    // Side effect: e.g., setting up a timer
    const timer = setInterval(() => {
      console.log('Timer running');
    }, 1000);

    // Cleanup function for unmount
    return () => {
      clearInterval(timer);
      console.log('Component unmounted');
    };
  }, [count]); // Dependency array: effect will run when `count` changes

  return (
    <View style={styles.container}>
      <Text style={styles.count}>Count: {count}</Text>
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default UseEffectPrac;
