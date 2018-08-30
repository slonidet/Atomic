import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ColorTheme from '../../styles/theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    alignSelf: 'stretch',
    height: 50,
  },
  text: {
    textAlign: 'center',
    fontSize: 19,
    color: ColorTheme.buttonMainTextColor,
  }
});

class Header extends Component {

    render() {

      const arrowSize = 30
    
      return (
        <View style={styles.container}>

          {this.props.hasArrow && (
            <Icon 
              name="arrow-left" 
              size={arrowSize} 
              color={ColorTheme.arrowColor} 
              onPress={()=>alert('hi')}/>
            )
          }

          <Text style={styles.text}>
            {this.props.text}
          </Text>

          {this.props.hasArrow && <View style={{width: arrowSize}}></View>}
          
        </View>
      );
    }
  }
  
  export default Header;