import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import data from './data';

export default class App extends Component {
  renderContactItem = ({item, index}) => {
    return (
      <>
        <View>
          <Text>{item.name}</Text>
        </View>
      </>
    );
  };

  render() {
    return (
      <>
        <SafeAreaView>
          <FlatList
            keyExtractor={item => {
              item._id;
            }}
            renderItem={this.renderContactItem}
            data={data}></FlatList>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
