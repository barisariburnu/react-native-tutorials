import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

class App extends Component {
  render() {
    return (
      <>
        <SafeAreaView>
          <View style={styles.container}>
            <Text>React Navigation</Text>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
