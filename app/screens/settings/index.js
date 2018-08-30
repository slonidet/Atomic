import React from 'react';
import { Text, View, Button } from 'react-native';
import Bottom from '../../components/bottom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  state: state.nav,
});


class SettingsScreen extends React.Component {
  render() {
    // console.log('SettingsScreen---->>', this.props);

    return (
      <View style={{ flex: 1 }} >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
          <Text>Settings!</Text>
          <Button
            title="Go to Wallets"
            onPress={() => this.props.navigation.navigate('Wallets')}
          />
        </View>
        <Bottom navigation={ this.props.navigation } />
      </View>
    );
  }
}

export default connect(mapStateToProps)(SettingsScreen);