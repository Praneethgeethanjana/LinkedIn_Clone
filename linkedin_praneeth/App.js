/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SignUp from './screens/SignUp';
import Main from './screens/Main';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Main/>
    );
  }
}
