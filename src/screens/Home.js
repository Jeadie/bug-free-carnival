import React from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends React.Component {

  static navigationOptions = {
    title: 'Heart Helper',
    headerBackTitle: 'Back'
  }

  render() {
    return (
      <View>
        <Text>Welcome</Text>
        <Button title={'Record Fluid Intake'} onPress={() => this.props.navigation.navigate('RecordFluid')} />

      </View>
    );
  }
}
