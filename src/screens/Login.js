import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default class Login extends React.Component {

  static navigationOptions = {
    title: 'Login'
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            <Button title="Login" onPress={() => this.props.navigation.navigate('app')} />
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
