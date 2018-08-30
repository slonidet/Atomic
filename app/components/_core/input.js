import React, { Component } from 'react';
import {  
  View,
  StyleSheet,
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/FontAwesome';

import ColorTheme from '../../styles/theme'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    alignContent: 'center'
  },
  icon: {
    position: 'absolute',
    right: 10,
    bottom: 20

  }
});

class Input extends Component {

  state = {
    phrase: '',
  }

  render() {
    let { phrase } = this.state;
    return (
      <View style={styles.container}>
        <TextField 
          label={'Input 12 word Backup Phrase'}
          value={phrase}
          onChangeText={ (phrase) => this.setState({ phrase }) }
          error={this.props.errorText}
          textColor={ColorTheme.inputColor}
          baseColor={ColorTheme.inputLabelColor}
          inputContainerPadding={15}
        />
        <Icon 
          name='qrcode'
          size={25}
          color={ColorTheme.secondaryThemeColor}
          onPress={ () => alert('Scan your QR code') }
          style={styles.icon}/>
      </View>

    );
  }
}

export default Input;