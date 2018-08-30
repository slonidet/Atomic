import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ColorTheme from '../styles/theme';

class Circle extends Component {
  render() {
    return (
      <Icon 
        name={this.props.filledUp ? 'checkbox-blank-circle' : 'checkbox-blank-circle-outline'}
        size={20}
        color={ColorTheme.secondaryThemeColor}/>
    )
  }
}
  
export default Circle;