import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import EmployeeList from './src/Components/EmployeeList';

class App extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <EmployeeList />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
