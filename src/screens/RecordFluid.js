import React from 'react';
import { Button } from 'react-native-elements';
import { View, Text, Slider } from 'react-native';
import NumericInput from '../components/NumericInput';


export default class RecordFluid extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 50,
      loading: false,
    }
  }

  static navigationOptions = {
    title: 'Record Fluid Intake',
    headerBackTitle: 'Record',
  }

  onInputChange(value) {
    if (!this.state.loading) {
      console.log(value);
      this.setState({value: value});
    }
  }

  onSubmitPress() {
    this.setState({loading: true});
  }

  onValueButtonPress(value) {
    this.setState({value: value});
  }

  render() {
    return (
      <View style={{flex: 3, justifyContent: 'center', borderWidth: 1, borderColor: 'red'}}>
        <View style={styles.inputContainerStyles}>
          <Slider style={styles.sliderStyles}
            minimumTrackTintColor={'#f22'}
            maximumValue={2000}
            value={this.state.value}
            step={1}
            onValueChange={this.onInputChange.bind(this)}
          />
          <NumericInput style={styles.fluidInputStyles}
            onChange={this.onInputChange.bind(this)}
            value={this.state.value}
            minValue={0}
            maxValue={2000}
            maxLength={4}
          />
          <Text style={styles.fluidLabelStyles}>ml.</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 30 }}>
          <Button
            title={'30ml'}
            textStyle={{ fontWeight: 'bold', fontSize: 16, color: '#e22' }}
            buttonStyle={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#999',
              width: 75,
              height: 75,
              borderRadius: 40
            }}
            containerViewStyle={{width: 75, height: 75}}
            onPress={() => this.onValueButtonPress(30)}
          />
          <Button
            title={'250ml'}

            textStyle={{ fontWeight: 'bold', fontSize: 16, color: '#da2' }}
            buttonStyle={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#999',
              width: 75,
              height: 75,
              borderRadius: 40
            }}
            containerViewStyle={{width: 75, height: 75}}
            onPress={() => this.onValueButtonPress(250)}
          />
          <Button
            title={'500ml'}
            textStyle={{ fontWeight: 'bold', fontSize: 16, color: '#2a2' }}
            buttonStyle={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#999',
              width: 75,
              height: 75,
              borderRadius: 40
            }}
            containerViewStyle={{width: 75, height: 75}}
            onPress={() => this.onValueButtonPress(500)}
          />
        </View>
        <View style={{ flex: 1, alignSelf: 'center'}}>
          <Button
            title={this.state.loading ? '' : 'Record Intake'}

            textStyle={{ fontWeight: 'bold', fontSize: 20 }}
            buttonStyle={{
              backgroundColor: '#f22',
              width: 300,
              height: 45,
              borderRadius: 4
            }}
            loading={this.state.loading}
            onPress={this.onSubmitPress.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  inputContainerStyles: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },

  sliderStyles: {
    flex: 7,
  },

  fluidInputStyles: {
    flex: 2,
    textAlign: 'center',
    color: '#a90',
    fontWeight: 'bold',
    fontSize: 18,
  },

  fluidLabelStyles: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16
  }
}
