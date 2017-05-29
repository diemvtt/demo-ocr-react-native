'use strict';

import React, {Component} from 'react';

import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  CameraRoll
} from 'react-native';

import QRCode from 'react-native-qrcode';

import { takeSnapshot } from "react-native-view-shot";

var styles = require('./stylesheets/style.js');

export default class QRCodeGenerator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: 'CameCame by React-Native',
      value: {
        format: "png",
        quality: 0.9,
        result: "file"
      }
    };

  }

  snapshot = refname => () =>
    takeSnapshot(this.refs[refname], this.state.value)
      .then(
        uri =>   {
          var promise = CameraRoll.saveToCameraRoll(uri, 'photo');
          promise.then(function(result) {
            console.log('save succeeded ' + result);
          }).catch(function(error) {
            console.log('save failed ' + error);
          });
        },
        error => console.error("Oops, snapshot failed", error)
    );

  render() {
    return(
      <View style={styles.generatorContainer}>

        <TextInput
          style = {styles.qrInput}
          onChangeText = {(text) => this.setState({text: text})}
          value = {this.state.text}/>
        <View ref="qrimage" style ={styles.qrWrapper}>
        <QRCode
          value = {this.state.text}
          size = {200} />
        </View>

        <TouchableOpacity style= {styles.blueButton} onPress={this.snapshot("qrimage")}>
          <Text style={styles.mainText}>Save Photo</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

