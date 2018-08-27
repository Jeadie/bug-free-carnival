import React from 'react';
import { Text, View, ScrollView, TextInput } from 'react-native';
import { Button } from 'react-native-elements';


export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      err: '',
      loading: false
    }
  }


  static navigationOptions = {
    title: 'Login'
  }

  onLoginButtonPress() {
    console.log('email: ' + this.state.email + '\npassword: ' + this.state.password);
    //this.props.navigation.navigate('app');
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text>Image</Text>
          </View>
          <View>
            <TextInput
              placeholder='username@gmail.com'
              onChangeText={ (email) => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              placeholder='password'
              onChangeText={ (password) => this.setState({ password })}
              value={this.state.password}
              autoCorrect={false}
              secureTextEntry
              style={styles.input}
            />
          </View>
          <View>
            <Button
              title={'Log in'}
              textStyle={styles.loginButtonText}
              buttonStyle={styles.loginButton}
              loading={this.state.loading}
              onPress={this.onLoginButtonPress.bind(this)}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = {

  container: {
    flex: 1,
    alignItems: 'center',
  },

  input: {
    width: 300,
    height: 45,
    borderColor: '#333',
    borderBottomWidth: 2,

  },

  loginButton: {
    backgroundColor: '#f22',
    width: 130,
    height: 40,
    borderRadius: 4,
  },

  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 40,
    height: 40
  },

  errorText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    padding: 10
  }
};
