import React from 'react';
import { TextInput, View } from 'react-native';

export default class NumericInput extends React.Component {

  onKeyPress() {
    const { value, maxLength, maxValue, onChange } = this.props;

    if (value.toString().length >= maxLength) {
      onChange(maxValue);
    }
  }

  onTextChange(text) {
    const { maxValue, minValue, onChange } = this.props;
    const validCharacters = '0123456789';
    let value = '';

    for (let i = 0; i < text.length; i++) {
      if (validCharacters.indexOf(text[i]) > -1) {
        value = value + text[i];
      }
    }

    value = parseInt(text);

    if (value < minValue || isNaN(value)) {
      value = minValue;
    } else if (value > maxValue) {
      value = maxValue;
    }

    onChange(value);
  }

  render() {
    const { style, value, maxLength } = this.props;

    return (
        <TextInput
          style={style}
          value={value.toString()}
          onChangeText={this.onTextChange.bind(this)}
          onKeyPress={this.onKeyPress.bind(this)}
          keyboardType={'numeric'}
          maxLength={maxLength}

        />

    );
  }
}

