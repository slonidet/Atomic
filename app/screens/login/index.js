import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signIn } from '../../stores/reducers/auth';
import { Colors, Theme } from '../../styles';
import { Logger, promisifyAction } from '../../utils';

const mapDispatchToProps = dispatch => ({
  dispatch,
  signIn: promisifyAction(dispatch, signIn),
});

const mapStateToProps = state => ({
  user: state.auth.currentUser,
  isAuthenticated: state.auth.isAuthenticated,
  config: state.config,
});

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flex: 1,
    backgroundColor: Colors.whiteBlue,
  },
  body: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flex: 1,
    paddingHorizontal: 15,
  },
});

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.any,
    signIn: PropTypes.func,
    user: PropTypes.any,
    isAuthenticated: PropTypes.bool,
    config: PropTypes.any,
    signInWithGoogle: PropTypes.func,
  }

  static defaultProps = {

  }

  constructor(...args) {
    super(...args);
    this.state = {
      email: '',
      password: '',
    };
    this.signIn = this.signIn.bind(this);
  }

  validate() {
    if (!/^[^@]+@[^.@]+\..+$/i.test(this.state.email)) {
      Logger.alert('Email is incorrect');
      return false;
    }
    if (this.state.password.length === 0) {
      Logger.alert('Password is required');
      return false;
    }
    return true;
  }

  async signIn() {
    if (!this.validate()) return;
    try {
      const user = await this.props.signIn({
        username: this.state.email,
        password: this.state.password,
      });
      this.props.navigation.navigate('Home');
    } catch (error) {
      Logger.error(error);
      Logger.alert('Wrong Credentials!');
    }
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.body}>
          <Text style={{ alignSelf: 'center', color: Theme.textMainColor }}>Or sign in with</Text>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
