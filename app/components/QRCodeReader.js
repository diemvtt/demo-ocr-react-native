'use strict';

import React, {Component, PropTypes} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  AlertIOS
  } from 'react-native';

import Camera from 'react-native-camera';

var styles = require('./stylesheets/style.js');

export default class QRCodeReader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCamera: true
    };

    this._onBarCodeRead = this._onBarCodeRead.bind(this);
  }

  _onBarCodeRead(e) {
    this.setState({showCamera: false});
    AlertIOS.alert(
      "Barcode Found!",
      e.data
    );
  }

  renderCamera() {
    if(this.state.showCamera) {
      return (
        <Camera onBarCodeRead={this._onBarCodeRead} style={styles.camera}>
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle}/>
          </View>
        </Camera>
      );
    }
    else {
      return(
        <View></View>
      );
    }
  }

  render() {
    return (
      this.renderCamera()
    );
  }

};


