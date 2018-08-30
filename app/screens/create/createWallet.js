import React, { PureComponent } from 'react';
import {  
  View,
  StyleSheet,
  Text,
} from 'react-native';

import Button from '../../components/_core/button';
import Header from '../../components/_core/header';
import Logo from '../../components/logo';
import ColorTheme from '../../styles/theme'

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

class CreateWallet extends PureComponent {

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

          <Logo isBig={true}/>

          <View>

            <Text style={styles.text}>
              Please write down 12-word Backup Phrase and keep a copy in a secure location so you can restore your wallet at anytime
            </Text>

            <Text style={[styles.text, styles.blueText]}>
              this twelve word backup phrase will help you to restore your wallet
            </Text>

            <Button
              type='upper'
              text='COPY TO CLIPBOARD'
              />
    
            <Button
              type='lower'
              text='Start using atomic'
              />
          </View>

        </View>
        // </Provider>
      );
    }
  }
  
  export default CreateWallet;  