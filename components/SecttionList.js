import React from 'react';
import { View, Text, SectionList, StyleSheet, ScrollView } from 'react-native';

const SecttionList = () => {
  // Sample data with sections
  const sections = [
    {
      title: 'A',
      data: [{ id: '1', name: 'Alice' }, { id: '2', name: 'Alex' }],
    },
    {
      title: 'B',
      data: [{ id: '3', name: 'Bob' }, { id: '4', name: 'Bella' }],
    },
    {
      title: 'C',
      data: [{ id: '5', name: 'Charlie' }, { id: '6', name: 'Chloe' }],
    },
  ];

  // Function to render each item
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  // Function to render each section header
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <SectionList
        sections={sections} // Array of section data
        renderItem={renderItem} // Function to render each item
        renderSectionHeader={renderSectionHeader} // Function to render each section header
        keyExtractor={(item, index) => item.id + index} // Unique key for each item
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    backgroundColor: '#f4a261',
    padding: 10,
    borderRadius: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  item: {
    backgroundColor: '#e9c46a',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
  },
});

export default SecttionList;
