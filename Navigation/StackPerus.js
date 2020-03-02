import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Etusivu from '../pages/Etusivu';

import Tuotelista from '../pages/Tuotelista';
import Games from '../pages/Games';
import Consoles from '../pages/Consoles';
import Chairs from '../pages/Chairs';
import Laptops from '../pages/Laptops';
import Karry from '../pages/Karry';
import Checkout from '../pages/Checkout';
import Asiakastapahtuma from '../pages/Asiakastapahtuma';

import { Image, StyleSheet, ImageBackground, Alert, Button, TouchableOpacity, Text } from 'react-native';



const StackPerus = createStackNavigator(
  {
    Etusivu: {
      screen: Etusivu,
      navigationOptions: ({ navigation }) => {
      const { navigate } = navigation
      return {
        headerTitle: 'Tuote kategoriat',
        headerRight: <TouchableOpacity style={styles.button} title="Ostoskärry" onPress={() => navigate('Karry')}><Text style={styles.ostoskärry}>Ostoskärry</Text></TouchableOpacity>,
    }
    }
    },
    
    Tuotelista: {
      screen: Tuotelista,
      navigationOptions: ({ navigation }) => {
      const { navigate } = navigation
      return {
        headerTitle: 'Tuotelista',
        headerRight: <TouchableOpacity style={styles.button} title="Ostoskärry" onPress={() => navigate('Karry')}><Text style={styles.ostoskärry}>Ostoskärry</Text></TouchableOpacity>,
    }
    }
    },

    Games: {
      screen: Games,
      navigationOptions: ({ navigation }) => {
      const { navigate } = navigation
      return {
        headerTitle: 'Games',
        headerRight: <TouchableOpacity style={styles.button} title="Ostoskärry" onPress={() => navigate('Karry')}><Text style={styles.ostoskärry}>Ostoskärry</Text></TouchableOpacity>,
    }
    }
    },

    Consoles: {
      screen: Consoles,
      navigationOptions: ({ navigation }) => {
      const { navigate } = navigation
      return {
        headerTitle: 'Consoles',
        headerRight: <TouchableOpacity style={styles.button} title="Ostoskärry" onPress={() => navigate('Karry')}><Text style={styles.ostoskärry}>Ostoskärry</Text></TouchableOpacity>,
    }
    }
    },

    Chairs: {
      screen: Chairs,
      navigationOptions: ({ navigation }) => {
      const { navigate } = navigation
      return {
        headerTitle: 'Chairs',
        headerRight: <TouchableOpacity style={styles.button} title="Ostoskärry" onPress={() => navigate('Karry')}><Text style={styles.ostoskärry}>Ostoskärry</Text></TouchableOpacity>,
    }
    }
    },

    Laptops: {
      screen: Laptops,
      navigationOptions: ({ navigation }) => {
      const { navigate } = navigation
      return {
        headerTitle: 'Laptops',
        headerRight: <TouchableOpacity style={styles.button} title="Ostoskärry" onPress={() => navigate('Karry')}><Text style={styles.ostoskärry}>Ostoskärry</Text></TouchableOpacity>,
    }
    }
    },

    Karry: {
      screen: Karry,
      navigationOptions: ({ navigation }) => {
      const { navigate } = navigation
      return {
        headerTitle: 'Karry',
        headerRight: <TouchableOpacity style={styles.button} title="Checkout" onPress={() => navigate('Checkout')}><Text style={styles.ostoskärry}>Checkout</Text></TouchableOpacity>,
    }
    }
    },

    Checkout: {
      screen: Checkout,
      navigationOptions: ({ navigation }) => {
      const { navigate } = navigation
      return {
        headerTitle: 'Checkout',
        headerRight: <TouchableOpacity style={styles.button} title="Asiakastapahtuma" onPress={() => navigate('Asiakastapahtuma')}><Text style={styles.ostoskärry}>Tapahtuma</Text></TouchableOpacity>,
    }
    }
    },

    Asiakastapahtuma: {
      screen: Asiakastapahtuma,
      navigationOptions: { title: 'Asiakastapahtuma' },
    },
    
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const styles = StyleSheet.create({
  button: {
    backgroundColor:'#00BFFF',
    borderRadius:5,
    height: 35,
    width: 100,
    borderWidth:2,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'},

    ostoskärry: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: 'white',
      fontSize: 17,
    }


    
    }
    );



export default createAppContainer(StackPerus);
