import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  View,
  Image,
  Text,
  ActivityIndicator,
  Platform,
} from 'react-native';
import axios from 'axios';

const api = axios.create({baseURL: 'https://randomuser.me/api'});
const isIos = Platform.OS === 'ios';

class DynamicEmployeeList extends Component {
  state = {
    text: '',
    page: 1,
    contacts: [],
    allContacts: [],
    loading: true,
    duringMomentum: false,
    refreshing: false,
  };

  componentDidMount() {
    this.getContacts();
  }

  getContacts = async () => {
    this.setState({loading: true});

    const {
      data: {results: contacts},
    } = await api.get(`/?results=10&page=${this.state.page}`);

    const users = [...this.state.allContacts, ...contacts];

    if (this.state.refreshing) {
      users.reverse();
    }

    this.setState({
      contacts: users,
      allContacts: users,
      loading: false,
      refreshing: false,
    });
  };

  loadMore = () => {
    if (!this.state.duringMomentum) {
      this.setState({page: this.state.page + 1}, () => this.getContacts());
      this.state.duringMomentum = true;
    }
  };

  onRefresh = () => {
    if (!this.state.duringMomentum) {
      this.setState({page: 1, refreshing: true}, () => this.getContacts());
      this.state.duringMomentum = true;
    }
  };

  renderContactItem = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
          style={[
            styles.itemContainer,
            {backgroundColor: index % 2 === 0 ? '#fafafa' : ''},
          ]}>
          <Image style={styles.avatar} source={{uri: item.picture.thumbnail}} />
          <View style={styles.itemDetailContainer}>
            <Text style={styles.name}>
              {item.name.first} {item.name.last}
            </Text>
            <Text>{item.location.state}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };
  duringMomentum;
  searchFilter = text => {
    const newData = this.state.allContacts.filter(item => {
      const listItem = `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()} ${item.location.state.toLowerCase()}`;
      return listItem.indexOf(text.toLowerCase()) > -1;
    });

    this.setState({contacts: newData});
  };

  renderHeader = () => {
    const {text} = this.state;
    return (
      <View style={styles.searchContainer}>
        <TextInput
          onFocus={() => {
            this.state.duringMomentum = true;
          }}
          onBlur={() => {
            this.state.duringMomentum = false;
          }}
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

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View style={styles.loadMore}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  render() {
    return (
      <>
        <FlatList
          keyExtractor={item => {
            return item.login.uuid;
          }}
          ListHeaderComponent={this.renderHeader()}
          ListFooterComponent={this.renderFooter()}
          renderItem={this.renderContactItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={isIos ? 0 : 0.2}
          onMomentumScrollBegin={() => {
            this.state.duringMomentum = false;
          }}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
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
  loadMore: {
    paddingVertical: 20,
  },
});

export default DynamicEmployeeList;
