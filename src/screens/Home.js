import React from 'react';
import { View, Text } from 'react-native';

export default class Home extends React.Component {

  static navigationOptions = {
    title: 'Heart Helper'
  }

  render() {
    return (
      <View>
        <Text>Welcome</Text>
      </View>
    );
  }
}
