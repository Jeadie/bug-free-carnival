import React from 'react';
import { Button } from 'react-native-elements';
import { View, Text, Slider } from 'react-native';
import NumericInput from '../components/NumericInput';
import firebase  from 'react-native-firebase';


export default class RecordFluid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 30,
      loading: false,
    }
  }

  static navigationOptions = {
    title: 'Record Fluid Intake',
    headerBackTitle: 'Record',
  }

  /* Updates the current fluid intake value (shared between buttons, slider, input) */
  updateFluidInput(value) {
    if (!this.state.loading)
      this.setState({value: value});
  }

  onSubmitPress() {
    this.setState({loading: true, err: ''});

    const date = new Date();
    const { uid } = firebase.auth().currentUser;
    const doc = firebase.firestore().collection('users').doc(uid).collection('fluidIntake').doc();

    doc.set({
      date: date.toDateString(),
      time: date.toTimeString(),
      intake: this.state.value
    }).then(() => {
      this.setState({ err: '' });
      this.props.navigation.navigate('Home'); /* TODO: Link to stats page as in wireframe */
    }).catch(() => {
      this.setState({err: 'Failed to add record', loading: false});
    });
  }


  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.inputContainerStyle}>
          <Slider style={styles.sliderStyle}
            minimumTrackTintColor={'#f22'}
            maximumValue={2000}
            value={this.state.value}
            step={1}
            onValueChange={this.updateFluidInput.bind(this)}
          />
          <NumericInput style={styles.fluidInputStyle}
            onChange={this.updateFluidInput.bind(this)}
            value={this.state.value}
            minValue={0}
            maxValue={2000}
            maxLength={4}
          />
          <Text style={styles.textStyle}>ml.</Text>
        </View>
        <View style={styles.commonContainerStyle}>
          <Button
            title={'30ml'}
            textStyle={{ color: '#e22' }}
            buttonStyle={styles.commonButtonStyle}
            containerViewStyle={{width: 75, height: 75}}
            onPress={() => this.updateFluidInput(30)}
          />
          <Button
            title={'250ml'}
            textStyle={{ color: '#da2' }}
            buttonStyle={styles.commonButtonStyle}
            containerViewStyle={{width: 75, height: 75}}
            onPress={() => this.updateFluidInput(250)}
          />
          <Button
            title={'500ml'}
            textStyle={{ color: '#2a2' }}
            buttonStyle={styles.commonButtonStyle}
            containerViewStyle={{ width: 75, height: 75 }}
            onPress={() => this.updateFluidInput(500)}
          />
        </View>
        <View>
          <Text style={styles.errorTextStyle}>{this.state.err}</Text>
          <Button
            title={this.state.loading ? '' : 'Record Intake'}
            textStyle={{ fontWeight: 'bold', fontSize: 20 }}
            buttonStyle={styles.submitButtonStyle}
            loading={this.state.loading}
            onPress={this.onSubmitPress.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = {

  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },

  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  sliderStyle: {
    flex: 7,
  },

  fluidInputStyle: {
    flex: 2,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a90',
    textAlign: 'center',
  },

  commonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30
  },

  commonButtonStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#999',
    width: 75,
    height: 75,
    borderRadius: 40
  },

  submitButtonStyle: {
    backgroundColor: '#f22',
    width: 300,
    height: 45,
    borderRadius: 4,
  },

  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    padding: 10
  }

}
