import React, { PureComponent } from 'react';
import {  
  View,
  StyleSheet,
  Text,
} from 'react-native';

import Button from '../../components/_core/button';
import DigitKeyboard from '../../components/_core/digitKeyboard'
import Header from '../../components/_core/header';
import Logo from '../../components/logo';
import ColorTheme from '../../styles/theme'
import HiddenInput from '../../components/hiddenInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: ColorTheme.mainBackground,
  },
  text: {
    lineHeight: 25,
    fontSize: 16,
    color: ColorTheme.textMainColor,
    textAlign: 'center',
    marginBottom: 15,
    minWidth: 300,
    maxWidth: 320,
  },
  blueText: {
    color: ColorTheme.textSecondaryColor
  }
});

class EnterPin extends PureComponent {

    componentDidMount() {
      // initializeListeners('root', this.props.nav);
    }
  
    render() {
      return (
        // <Provider store={store}>
        <View style={styles.container}>

          <Header 
            hasArrow={true}
            text={'Create New Wallet'} 
            />

          <Logo isBig={false}/>

          <HiddenInput />

          <DigitKeyboard />


        </View>
        // </Provider>
      );
    }
  }
  
  export default EnterPin;  