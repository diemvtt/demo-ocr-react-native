//
//'use strict';
//
//import React, { Component } from 'react';
//import {
//  AppRegistry,
//  Text,
//  TouchableOpacity,
//  NavigatorIOS,
//  TabBarIOS,
//  View
//} from 'react-native';
//
//import Icon from 'react-native-vector-icons/Ionicons';
//
//
//import CameraController from 'app/components/CameraController';
//import QRCodeReader from 'app/components/QRCodeReader';
//import QRCodeGenerator from 'app/components/QRCodeGenerator';
//import OCRTest from 'app/components/OCRTest';
//
//
//var styles = require('./app/components/stylesheets/style.js');
//
//class CameCame extends Component {
//
//  render() {
//    return (
//      <NavigatorIOS
//        style={styles.container}
//        initialRoute={{
//          title: 'CameCame',
//          backButtonTitle: 'Back',
//          component: Index
//        }}
//        />
//    );
//  }
//}
//
//class Index extends Component {
//
//  constructor(props) {
//    super(props);
//
//    this.state = {selectedTab: 'photo-ocr'};
//  }
//
//  render() {
//    return (
//      <TabBarIOS>
//        <Icon.TabBarItem
//          title="QR Reader"
//          iconName="ios-paper-outline"
//          selectedIconName="ios-paper"
//          selected={this.state.selectedTab === 'qr-reader'}
//          onPress={() => {
//            this.setState({
//              selectedTab: 'qr-reader'
//            });
//          }}>
//          <QRCodeReader/>
//        </Icon.TabBarItem>
//        <Icon.TabBarItem
//          title="Take Photo"
//          iconName="ios-camera-outline"
//          selectedIconName="ios-camera"
//          selected={this.state.selectedTab === 'photo-ocr'}
//          onPress={() => {
//            this.setState({
//              selectedTab: 'photo-ocr'
//            });
//          }}>
//          <OCRTest navigator={this.props.navigator}/>
//        </Icon.TabBarItem>
//        <Icon.TabBarItem
//          title="Generate QR"
//          iconName="ios-code-outline"
//          selectedIconName="ios-code"
//          selected={this.state.selectedTab === 'qr-maker'}
//          onPress={() => {
//            this.setState({
//              selectedTab: 'qr-maker'
//            });
//          }}>
//          <QRCodeGenerator/>
//        </Icon.TabBarItem>
//      </TabBarIOS>
//
//    );
//  }
//
//  _onPressQRCode() {
//    this.props.navigator.push({
//      component: QRCodeReader,
//      title: 'QRCode',
//      passProps: {
//        onSucess: this._onSucess
//      }
//    });
//  }
//
//  _onGenerateQRCode() {
//    this.props.navigator.push({
//      component: QRCodeGenerator,
//      title: 'Generate QRCode',
//      passProps: {
//        onSucess: this._onSucess
//      }
//    });
//  }
//
//  _onTakePhoto() {
//    this.props.navigator.push({
//      component: CameraController,
//      passProps: {
//        onSucess: this._onSucess
//      }
//    });
//  }
//
//  _onOCRCode() {
//    this.props.navigator.push({
//      component: OCRTest,
//      passProps: {
//        onSucess: this._onSucess
//      }
//    });
//  }
//
//  _onSucess(result) {
//    console.log(result);
//  }
//
//}
//

import React from 'react';
import { AppRegistry } from 'react-native';
import CameCame from './app';


AppRegistry.registerComponent('CameCame', () => CameCame);
