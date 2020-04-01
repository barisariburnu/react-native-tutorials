import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.headBackground}></View>
          <View>
            <Text style={styles.logo}>UDAC</Text>
            <Text style={styles.logoDescription}>Property & Tax Survey</Text>
          </View>
          <ScrollView>
            <View style={styles.loginArea}>
              <Text style={styles.loginAreaTitle}>Property Tax Server</Text>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fcff',
    paddingVertical: 80,
  },
  headBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 250,
    width: '100%',
    backgroundColor: '#1572de',
  },
  logo: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f2f2f2',
  },
  logoDescription: {
    textAlign: 'center',
    color: '#f2f2f2',
  },
  loginArea: {
    marginHorizontal: 40,
    marginVertical: 40,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  loginAreaTitle: {
    fontSize: 20,
    textAlign: 'center'
  },
});

export default Login;
