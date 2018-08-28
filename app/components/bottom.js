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
      key: 'games',
      icon: 'inbox',
      label: 'Games',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'movies-tv',
      icon: 'inbox',
      label: 'Movies & TV',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'music',
      icon: 'inbox',
      label: 'Music',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)',
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
        isActive={isActive}
        key={tab.key}
        label={tab.label}
        renderIcon={this.renderIcon(tab.icon)}
      />
    );
  }

  render() {
    console.log('->>', this.props)
    return (
      <View style={{ flex: 1 }}>
        <BottomNavigation
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bottom);