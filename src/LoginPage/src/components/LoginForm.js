import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Input from './Input';
import MyButton from './MyButton';

export default class LoginForm extends Component {
  render() {
    return (
      <View>
        <Text style={styles.signInText}>Sign In</Text>
        <Input
          returnKeyType={'next'}
          autoCapitalize="none"
          placeholder="Username"
          onSubmitEditing={() => this.passwordInput.focus()}
        />
        <Input
          returnKeyType={'go'}
          secureTextEntry={true}
          placeholder="Password"
          inputRef={input => (this.passwordInput = input)}
        />

        <MyButton text={"Sign In Now"} backgroundColor={"#0065e0"} color={"#f1f1f1"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signInText: {
    marginVertical: 10,
    fontSize: 14,
    color: '#333',
  },
});
