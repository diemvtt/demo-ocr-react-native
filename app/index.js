
'use strict';

import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Navigator,
  View,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';

import TabBar from './components/TabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import CameraController from './components/CameraController';
import QRCodeReader from './components/QRCodeReader';
import QRCodeGenerator from './components/QRCodeGenerator';
import OCRTest from './components/OCRTest';

var styles = require('./components/stylesheets/style.js');

export default class CameCame extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator style={styles.container}
        initialRoute={{
          title: 'CameCame',
          component: Index
        }}
        renderScene={(route, navigator) => {
          return <route.component navigator={navigator}/>
          }
        }
        />
    );
  }
}


class Index extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 20}}
        initialPage={1}
        renderTabBar={() => <TabBar />}
        >
        <ScrollView tabLabel="ios-paper" style={styles.tabView}>
          <QRCodeReader/>
        </ScrollView>
        <ScrollView tabLabel="ios-camera" style={styles.tabView}>
          <OCRTest navigator={this.props.navigator}/>
        </ScrollView>
        <ScrollView tabLabel="ios-code" style={styles.tabView}>
          <QRCodeGenerator/>
        </ScrollView>
      </ScrollableTabView>
    );
  }


  _onSucess(result) {
    console.log(result);
  }

}

