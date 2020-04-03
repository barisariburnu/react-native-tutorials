import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

function DetailScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <Button title={"Go Back"} onPress={() => {navigation.goBack()}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailScreen;
