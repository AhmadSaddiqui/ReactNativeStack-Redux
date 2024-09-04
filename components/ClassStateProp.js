import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class ClassStateProp extends Component {
  // Initializing the state
  state = {
    count: 0,
  };

  // Function to increment the count
  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  // Function to reset the count to 0
  resetCount = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Displaying a message passed through props */}
        <Text style={styles.message}>{this.props.message}</Text>
        {/* Displaying the current count from state */}
        <Text style={styles.count}>Count: {this.state.count}</Text>
        {/* Button to increment the count */}
        <Button title="Increment Count" onPress={this.incrementCount} />
        {/* Button to reset the count to 0 */}
        <View style={styles.resetButton}>
          <Button title="Reset Count" onPress={this.resetCount} color="#ff6347" />
        </View>
      </View>
    );
  }
}

// Default props in case none are passed
ClassStateProp.defaultProps = {
  message: 'Welcome to the Counter App!',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 24,
    marginBottom: 20,
  },
  count: {
    fontSize: 48,
    marginBottom: 20,
  },
  resetButton: {
    marginTop: 20,
  },
});

export default ClassStateProp;
