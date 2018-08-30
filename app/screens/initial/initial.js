import React, { PureComponent } from 'react';
import {  
  View,
  StyleSheet,
} from 'react-native';

import Button from '../../components/_core/button';
import Logo from '../../components/logo';
import ColorTheme from '../../styles/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: ColorTheme.mainBackground,
  }
});

class Initial extends PureComponent {

    componentDidMount() {
      // initializeListeners('root', this.props.nav);
    }
  
    render() {
      return (
        // <Provider store={store}>
        <View style={styles.container}>

          <Logo isBig={true}/>

          <View>
            <Button
              type='upper'
              text='CREATE NEW WALLET'
              />
    
            <Button
              type='lower'
              text='Restore from backup'
              />
          </View>

        </View>
        // </Provider>
      );
    }
  }
  
  export default Initial;  