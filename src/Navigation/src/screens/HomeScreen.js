import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to detail page" onPress={() => navigation.push('Detail')} />
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

export default HomeScreen;
