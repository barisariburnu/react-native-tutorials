import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  View,
  Image,
  Text,
} from 'react-native';
import data from '../../data';

class EmployeeList extends Component {
  state = {
    text: '',
    contacts: data,
  };

  renderContactItem = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
          style={[
            styles.itemContainer,
            {backgroundColor: index % 2 === 0 ? '#fafafa' : ''},
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

  searchFilter = text => {
    const newData = data.filter(item => {
      const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;
      return listItem.indexOf(text.toLowerCase()) > -1;
    });

    this.setState({contacts: newData});
  };

  renderHeader = () => {
    const {text} = this.state;
    return (
      <View style={styles.searchContainer}>
        <TextInput
          onChangeText={text => {
            this.setState({text});
            this.searchFilter(text);
          }}
          value={text}
          style={styles.searchInput}
          placeholder="Search.."></TextInput>
      </View>
    );
  };

  render() {
    return (
      <>
        <FlatList
          keyExtractor={item => {
            return item._id;
          }}
          ListHeaderComponent={this.renderHeader()}
          renderItem={this.renderContactItem}
          data={this.state.contacts}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
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
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
});

export default EmployeeList;
