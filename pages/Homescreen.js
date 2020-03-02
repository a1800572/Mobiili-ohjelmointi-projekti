import React, { Component } from 'react';
import {Container,Header,Body,Title,Content,View,TouchableOpacity,Button,Right} from 'native-base';
import { Image, StyleSheet, ImageBackground, Alert, Text } from 'react-native';
import { Constants } from 'expo';

 
export default class Homescreen extends Component {

  render() {
        const { navigate } = this.props.navigation;

    return (
      <ImageBackground source={{uri:'https://avatars.mds.yandex.net/get-pdb/879561/5daeb70f-610d-4c52-910b-437c0d936d20/orig'}} style= {styles.backgroundImage}>
      

      <Text style={styles.name}>Title</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  name: {
     textAlign: 'center',
     alignItems: 'center',
     flexDirection: 'column',
     marginTop: 275,
    color: 'red',

    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 50,

    shadowOpacity: 1,
    shadowColor: 'black',
    shadowRadius: 20,
    shadowOffset: {height:10,width:10},
  },

  

  backgroundImage: {
  flex: 1,
  width: null,
  height: null,
}


});