import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Button from '../../components/_core/button';
import Header from '../../components/_core/header';
import Input from '../../components/_core/input';
import Logo from '../../components/logo';
import ColorTheme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    backgroundColor: ColorTheme.mainBackground,
  },
  topWrapper: {
    alignContent: 'stretch',
    justifyContent: 'space-between',
    flex: 3,
  },
  bottomWrapper: {
    flex: 2,
    justifyContent: 'flex-end',
  },
});

class RestoreWallet extends PureComponent {
  componentDidMount() {
    // initializeListeners('root', this.props.nav);
  }

  render() {
    return (
      // <Provider store={store}>
      <View style={styles.container}>
        
        <View style={styles.topWrapper}>

          <Header
            hasArrow={true}
            text={'Restore From Private Key'}
            pressFunc={() => this.props.navigation.goBack()}
            />
          
          <Logo isBig={true}/>

          <Input />
        </View>

        <View style={styles.bottomWrapper}>
          <Button
            type='upper'
            text='RESTORE'
            />

        </View>
        
      </View>
      // </Provider>
    );
  }
}

export default RestoreWallet;
