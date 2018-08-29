import React from 'react';
import { Text, View, Button } from 'react-native';
import Bottom from '../../components/bottom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  state: state.nav,
});


class HistoryScreen extends React.Component {
  render() {
    // console.log('HomeScreen---->>', this.props);

    return (
      <View style={{ flex: 1 }} >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
          <Text>History!</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Settings')}
          />
        </View>
        <Bottom navigation={ this.props.navigation } />
      </View>
    );
  }
}

export default connect(mapStateToProps)(HistoryScreen);