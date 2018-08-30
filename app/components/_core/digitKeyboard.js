import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Keyboard from 'react-native-keyboard';

import ColorTheme from '../../styles/theme';
import DigitButton from './digitButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  }
})

class DigitKeyboard extends Component {
  render () {
    return (

      <View style={styles.container}>

        <View style={styles.row}>

          <DigitButton number={1}/>
          <DigitButton number={2}/>
          <DigitButton number={3}/>

        </View>

        <View style={styles.row}>

          <DigitButton number={4}/>
          <DigitButton number={5}/>
          <DigitButton number={6}/>

        </View>

        <View style={styles.row}>

          <DigitButton number={7}/>
          <DigitButton number={8}/>
          <DigitButton number={9}/>

        </View>

        <View style={styles.row}>

          <View style={{flex: 1}}/>
          <DigitButton number={0}/>
          <DigitButton type='correct'/>

        </View>

      </View>
    )
  }
}

export default DigitKeyboard;