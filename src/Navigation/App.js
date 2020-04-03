import React, {Component} from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

export default class App extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'My Home'}}
            />
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              initialParams={{title: 'Detail'}}
              options={({navigation, route}) => ({
                title: route.params.title,
                headerRight: () => (
                  <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                  />
                ),
                headerLeft: () => (
                  <Button
                    onPress={() => {
                      navigation.goBack();
                    }}
                    title="Back"
                  />
                ),
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const Stack = createStackNavigator();
