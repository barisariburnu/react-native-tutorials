import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
// import EmployeeList from './src/Components/EmployeeList';
import DynamicEmployeeList from './src/Components/DynamicEmployeeList';

class App extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          {/* <EmployeeList /> */}
          <DynamicEmployeeList />
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
