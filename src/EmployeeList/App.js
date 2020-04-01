import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import data from './data';

export default class App extends Component {
  renderContactItem = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
          style={[
            styles.itemContainer,
            {backgroundColor: index % 2 === 0 ? 'fafafa' : ''},
          ]}>
          <Image style={styles.avatar} source={{uri: item.picture}} />
          <View style={styles.itemDetailContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.company}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  renderHeader = () => {
    return (
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search.."></TextInput>
      </View>
    )
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <FlatList
            keyExtractor={item => {
              item._id;
            }}
            ListHeaderComponent={this.renderHeader}
            renderItem={this.renderContactItem}
            data={data}></FlatList>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  itemDetailContainer: {
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 16,
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    fontSize= 16,
    backgroundColor: '#f9f9f9',
    padding: 10,
  }
});

export default App;
