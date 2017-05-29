
import React, { Component, PropTypes } from 'react';
import {
  NativeAppEventEmitter,
  NativeModules,
  Platform,
  StyleSheet,
  requireNativeComponent,
  View,
  TouchableOpacity,
  Text,
  CameraRoll,
  Alert,
  Image
} from 'react-native';

const OCRTesseract = NativeModules.TesseractOCRTest;

import ImagePicker from 'react-native-image-picker';

import CameraController from './CameraController';

var styles = require('./stylesheets/style.js');


export default class OCRTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSource: null ,
      imgText: " "
    };


    this.selectPhoto = this.selectPhoto.bind(this);
    this.takePhoto = this.takePhoto.bind(this);
    this.callBackImageUrl = this.callBackImageUrl.bind(this);

  }

  analyzePhoto(image) {

    var alertMessage = "Couldn't recognize text. Please take or choose photo again. Thank you!";
    var source;

    source = {uri: image.uri.replace('file://', ''), isStatic: true};

    this.setState({imgSource: source});

    OCRTesseract.convertImg(image.uri.replace('file://', ''), (error, text) => {
      if(error) {
        console.log(error);
      }
      else {
        this.setState({imgText: text});

        if(!this.state.imgText) {
          Alert.alert(
            'ERROR',
            alertMessage,
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => Alert.alert(
                'Select a Photo',
                null,
                [
                  {text: 'Take Photo…', onPress: this.takePhoto},
                  {text: 'Choose from Library…', onPress: this.selectPhoto},
                  {text: 'Cancel', onPress: () => console.log('Cancelled!')},
                ]
              )}
            ]
          )
        }
      }
    });
  }

  selectPhoto() {
    const options = {
      quality: 1.0,
      storageOptions: {
        cameraRoll: true
      }
    };

    ImagePicker.launchImageLibrary(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {

        this.analyzePhoto(response);

      }
    });


  }

  takePhoto() {
    this.props.navigator.push({
      title: 'Camera',
      component: CameraController,
      callback: this.callBackImageUrl
    });
  }

  callBackImageUrl(image) {
    this.analyzePhoto(image);
    console.log(image)
  }

  render() {
    return(
      <View style={styles.generatorContainer}>
        <TouchableOpacity
          onPress={() => Alert.alert(
            'Select a Photo',
            null,
            [
              {text: 'Take Photo…', onPress: this.takePhoto},
              {text: 'Choose from Library…', onPress: this.selectPhoto},
              {text: 'Cancel', onPress: () => console.log('Cancelled!')},
            ]
          )}
          //onPress={this.selectPhoto}
          >

        <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.imgSource === null ? <Text>Select a Photo</Text> :
            <Image style={styles.avatar} source={this.state.imgSource} />
          }
        </View>
      </TouchableOpacity>

        <Text>{this.state.imgText}</Text>
      </View>
    );
  }
}

