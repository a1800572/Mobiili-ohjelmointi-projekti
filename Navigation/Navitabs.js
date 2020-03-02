import React from 'react';
import Homescreen from '../pages/Homescreen';

import Tuotelista from '../pages/Tuotelista';

import StackPerus from '../Navigation/StackPerus';

import { Icon } from 'react-native-elements';

import { createAppContainer } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';

const Navitabs = createBottomTabNavigator(
  {
    Homescreen: {
      screen: Homescreen,
      navigationOptions: {
        title: 'Homescreen',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        ),
      },
    },
    

    StackPerus: {
      screen: StackPerus,
      navigationOptions: {
        title: 'Kategoriat',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="list" size={25} color={tintColor} />
        ),
      },
    },
    
    
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: '#696969',
      labelStyle: { fontSize: 16 },
    },
  }
);

export default createAppContainer(Navitabs);