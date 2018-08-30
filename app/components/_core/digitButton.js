import React, { Component } from 'react';
import { 
  Text, 
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ColorTheme from '../../styles/theme';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    textAlign: 'center',
    color: ColorTheme.mainThemeColor,
    fontSize: 35,
  },

});

class DigitButton extends Component {
  render () {
    return (

      <TouchableHighlight 
        style={styles.button} >

        {this.props.type == 'correct' ?
          (<Icon 
            name='backspace'
            size={40}
            color={ColorTheme.arrowColor}
            />) :
          (<Text style={styles.buttonContent}>{this.props.number}</Text>) 
        }
        
      </TouchableHighlight >

    );
  }
}

export default DigitButton;