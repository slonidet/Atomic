import React from 'react';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { View, } from 'react-native';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mapStateToProps = state => ({
  state,
  activeTab: state.activeTab,

});


class Bottom extends React.Component {
  tabs = [
    {
      key: 'Wallets',
      icon: 'question',
      label: 'Wallets',
      barColor: '#2b3759',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'Exchange',
      icon: 'exchange',
      label: 'Exchange',
      barColor: '#2b3759',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'History',
      icon: 'history',
      label: 'History',
      barColor: '#2b3759',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'Swap',
      icon: 'question',
      label: 'Swap',
      barColor: '#2b3759',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'Settings',
      icon: 'cog',
      label: 'Settings',
      barColor: '#2b3759',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
  ]

  constructor(...args) {
    super(...args);
    this.renderTab = this.renderTab.bind(this);
  }

  renderIcon(icon) {
    return ({ isActive }) => (
      <FontAwesomeIcon size={24} color="white" name={icon} />
    );
  }

  renderTab({ tab, isActive }) {
    return (
      <FullTab
        isActive={ isActive }
        key={tab.key}
        label={tab.label}
        renderIcon={this.renderIcon(tab.icon)}
      />
    );
  }
  render() {
    console.log('-_-_-_-_-> ', this.props)
    return (
        <BottomNavigation
          onTabPress={ newTab => this.props.navigation.navigate( newTab.key ) }
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bottom);