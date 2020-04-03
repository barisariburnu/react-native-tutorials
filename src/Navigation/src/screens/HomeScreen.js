import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to detail"
        onPress={() => navigation.push('Detail')}
      />
      <Button
        title="Go to detail 1 page"
        onPress={() => navigation.push('Detail', {title: 'Detail 1'})}
      />
      <Button
        title="Go to detail 2 page"
        onPress={() => navigation.push('Detail', {title: 'Detail 2'})}
      />
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
