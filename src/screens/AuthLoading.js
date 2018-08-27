import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import firebase from 'react-native-firebase';

export default class AuthLoading extends React.Component {

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('app');
      } else {
        this.props.navigation.navigate('auth');
      }
    });
  }

  render() {
    return (
      <View>
        <ActivityIndicator/>
        <Text>Loading Application...{'\n'}Please wait</Text>
      </View>
    );
  }
}
