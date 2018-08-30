import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ColorTheme from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  bigText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: ColorTheme.buttonMainTextColor,
  },
  smallText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: ColorTheme.buttonMainTextColor,
  }
})

class Logo extends Component {

    render() {
      return (
        <View style={styles.container}>

          <Icon 
            name='arrow-up'
            size={this.props.isBig ? 130 : 60}
            color={ColorTheme.secondaryThemeColor}/>

          <Text style={this.props.isBig ? styles.bigText : styles.smallText}>
            Atomic
          </Text>

        </View>
      );
    }
  }
  
  export default Logo;