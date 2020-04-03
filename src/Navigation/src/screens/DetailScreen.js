import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

function DetailScreen({route, navigation}) {
  const {title} = route.params;

  return (
    <View style={styles.container}>
      <Text>Detail Screen (Title = {title})</Text>
      <Button
        title={'Go Back'}
        onPress={() => {
          navigation.goBack();
        }}
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

export default DetailScreen;
