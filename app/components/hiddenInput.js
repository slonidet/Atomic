import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Circle from './hiddenInputCircle'
import ColorTheme from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})

class HiddenInput extends Component {

  render() {
    return (
      <View style={styles.container}>

        <Circle filledUp={true}/>
        <Circle filledUp={false}/>
        <Circle filledUp={false}/>
        <Circle filledUp={false}/>

      </View>
    );
  }
}
  
export default HiddenInput;