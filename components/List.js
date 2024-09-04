import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

const List = () => {
  // Sample data array of objects
  const data = [
    { id: '1', name: 'John Doe', age: 28 },
    { id: '2', name: 'Jane Smith', age: 22 },
    { id: '3', name: 'Michael Johnson', age: 35 },
    { id: '4', name: 'Michael Johnson', age: 35 },
    { id: '5', name: 'Michael Johnson', age: 35 },
    { id: '6', name: 'Michael Johnson', age: 35 },
    { id: '7', name: 'Michael Johnson', age: 35 },
    { id: '8', name: 'Michael Johnson', age: 35 },
  ];

  // Function to render each item in the list
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <ScrollView>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.age}>Age: {item.age}</Text>
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data} // Array of objects to render
        renderItem={renderItem} // Function to render each item
        keyExtractor={item => item.id} // Unique key for each item
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  name: {
    fontSize: 24,
  },
  age: {
    fontSize: 16,
  },
});

export default List;
