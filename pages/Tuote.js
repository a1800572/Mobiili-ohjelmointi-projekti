import React from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, processColor,
StyleSheet,Image } from 'react-native';
import {Container, Header, Content, List, ListItem, Body, Right} from 'native-base';
import { Icon } from 'react-native-elements';

export default class Tuote extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <View style={styles.container}>
      <ListItem avatar>
      <Body>
        
          <Text style={styles.title}>{item.otsikko}</Text>
          <Image source={{uri:item.kuva}}
      style={styles.image}
      />
          <Text style={styles.price}>{item.hinta}</Text>

          <Text>{item.kuvaus}</Text>


        <TouchableOpacity onPress={this.props.onAdd} style={styles.buttonadd}>
        <Icon name="plus-square" type="font-awesome" color="white" size={30} />
        <Text style={styles.text1}>Lisää kärryyn</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity onPress={this.props.onSubtract} style={styles.buttondelet}>
        <Icon name="minus-square" type="font-awesome" color="white" size={30} />
        <Text style={styles.text1}>Poista Kärrystä</Text>
        </TouchableOpacity>
          
          

        </Body>
        </ListItem>
        </View>
      
    )
  }
}
const styles =StyleSheet.create({
    buttonadd: {
      marginTop: 10,
      color: 'white',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fc810d',
      height: 40,
      width: 225,
      borderRadius: 10,
      borderWidth:1,
      borderColor: 'black',
      shadowOpacity: 0.4,
      shadowColor: 'black',
      shadowRadius: 20,
      shadowOffset: {height:10,width:0},
      },

      buttondelet: {
      marginTop: 10,
      color: 'white',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      height: 40,
      width: 225,
      borderRadius: 10,
      borderWidth:1,
      borderColor: 'black',
      shadowOpacity: 0.4,
      shadowColor: 'black',
      shadowRadius: 20,
      shadowOffset: {height:10,width:0},
      },

      image: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      height: 225,
      width: 225,
    },

    container: {
      margin: 20,
      borderWidth:2,
      borderColor: 'black',
      backgroundColor: 'white',
      borderRadius: 20,
      padding:10,
      flexDirection: 'column',
    },
    text1: {
      fontSize: 20,
      color: 'white',
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },

    title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 0,
    width: 225,
    color: 'black',
    fontStyle: 'italic',
    },

    price: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    width: 225,
    color: 'black',
    lineHeight: 32,
    fontStyle: 'italic',
    },
    
}
);