/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

import SignIn from 'containers/SignIn'
import SignUp from 'containers/SignUp'

export default class practice1 extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="signIn" component={SignIn} title="Sign In" initial={true} hideNavBar={true}/>
          <Scene key="signUp" component={SignUp} hideNavBar={false} navigationBarStyle={{backgroundColor: 'transparent', borderBottomWidth: 0}}/>
        </Scene>
    </Router>
    );
  }
}

AppRegistry.registerComponent('practice1', () => practice1);
