import React, { Component } from 'react';
import { Container, Content, Form, Input} from 'native-base';
import { StyleSheet, View, TouchableOpacity, Alert, Text } from 'react-native';
import {Card, CardItem, InputGroup} from 'native-base';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('tiedot.db');

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enimi: '',
      snimi: '',
      yritys: '',
      osoite: '',
      kaupunki: '',
      postinro: '',
      maa: '',


      gamedata: this.props.screenProps.gamedata,
      data: this.props.screenProps.data,
      consoledata: this.props.screenProps.consoledata,
      tuolidata: this.props.screenProps.tuolidata,
      laptopdata: this.props.screenProps.laptopdata
      
    };
  }


  

  lisaa = () => {
    Alert.alert('Lisätty tapahtumiin');
    db.transaction(tx => {
      let sql =
        'CREATE TABLE if not exists tieto (' +
        'id integer PRIMARY KEY NOT NULL, ' +
        'enimi text NOT NULL, ' +
        'snimi text NOT NULL, ' +
        'yritys text NOT NULL, ' +
        'osoite text NOT NULL, ' +
        'kaupunki text NOT NULL, ' +
        'postinro text NOT NULL, ' +
        'maa text NOT NULL )';
      tx.executeSql(sql, null, this.lisays, this.virhe);
    });
  };

  lisays = () => {
    db.transaction(tx => {
      let sql =
        'INSERT INTO tieto (enimi, snimi, yritys, osoite, kaupunki, postinro, maa) ' +
        ' VALUES (?, ?, ?, ?, ?, ?, ?)';

      tx.executeSql(
        sql,
        [
          this.state.enimi,
          this.state.snimi,
          this.state.yritys,
          this.state.osoite,
          this.state.kaupunki,
          this.state.postinro,
          this.state.maa,
        ],
        this.ok,
      );
    });
  };

  ok = () => {
    this.alustakenttä();
  };


  alustakenttä = () => {
    this.setState({
      enimi: '',
      snimi: '',
      yritys: '',
      osoite: '',
      kaupunki: '',
      postinro: '',
      maa: ''
    });
  };


  

  render() {

    //muista korjata ja tehdä paremmin

    const { gamedata } = this.state;
    const { data } = this.state;
    const { consoledata } = this.state;
    const { tuolidata } = this.state;
    const { laptopdata } = this.state;

    let pelienmäärä = 0;
    let pelienhinta = 0;

    let electroniikanmäärä = 0;
    let electroniikanhinta = 0;

    let konsolienmäärä = 0;
    let konsolienhinta = 0;

    let tuolienmäärä = 0;
    let tuolienhinta = 0;

    let kannettavienmäärä = 0;
    let kannettavienhinta = 0;

    gamedata.forEach((item) => {
      pelienmäärä += item.quantity;
      pelienhinta += item.quantity * item.hintaI;
    })

    data.forEach((item) => {
      electroniikanmäärä += item.quantity;
      electroniikanhinta += item.quantity * item.hintaI;
    })

    consoledata.forEach((item) => {
      konsolienmäärä += item.quantity;
      konsolienhinta += item.quantity * item.hintaI;
    })

    tuolidata.forEach((item) => {
      tuolienmäärä += item.quantity;
      tuolienhinta += item.quantity * item.hintaI;
    })

    laptopdata.forEach((item) => {
      kannettavienmäärä += item.quantity;
      kannettavienhinta += item.quantity * item.hintaI;
    })

    let totalhinta=(
      pelienhinta+
      konsolienhinta+
      electroniikanhinta+
      tuolienhinta+
      kannettavienhinta
      );

    let totalmäärä=(
      pelienmäärä+
      konsolienmäärä+
      electroniikanmäärä+
      tuolienmäärä+
      kannettavienmäärä
    );

    let alv=((totalhinta/100)*24);

    let totalA=(alv+totalhinta);

    
    return (
      <Container style={styles.container}>
        <Content>
          <Form>
          <Card>
            
            <CardItem>
              <InputGroup borderType='regular'>
              <Input value={this.state.enimi} onChangeText={text => this.setState({enimi: text })} placeholder='Kirjoita etunimi' style={styles.itemc}/>
              </InputGroup>
            </CardItem>

            <CardItem>
              <InputGroup borderType='regular'>
              <Input value={this.state.snimi} onChangeText={text => this.setState({snimi: text })} placeholder='Kirjoita sukunimi' style={styles.itemc}/>
              </InputGroup>
            </CardItem>

            <CardItem>
              <InputGroup borderType='regular'>
              <Input value={this.state.yritys} onChangeText={text => this.setState({yritys: text })} placeholder='Kirjoita yrityksen nimi' style={styles.itemc}/>
              </InputGroup>
            </CardItem>

            <CardItem>
              <InputGroup borderType='regular'>
              <Input value={this.state.osoite} onChangeText={text => this.setState({osoite: text })} placeholder='Kirjoita osoite' style={styles.itemc}/>
              </InputGroup>
            </CardItem>

            <CardItem>
              <InputGroup borderType='regular'>
              <Input value={this.state.kaupunki} onChangeText={text => this.setState({kaupunki: text })} placeholder='Kirjoita kaupunki' style={styles.itemc}/>
              </InputGroup>
            </CardItem>

            <CardItem>
              <InputGroup borderType='regular'>
              <Input value={this.state.postinro} onChangeText={text => this.setState({postinro: text })} placeholder='Kirjoita postinimero' style={styles.itemc}/>
              </InputGroup>
            </CardItem>

            <CardItem>
              <InputGroup borderType='regular'>
              <Input value={this.state.maa} onChangeText={text => this.setState({maa: text })} placeholder='Kirjoita maa' style={styles.itemc}/>
              </InputGroup>
            </CardItem>

            <Card>

            <CardItem style={styles.cc}>
            <Text>Summa yhteensä ei sis alv :{totalhinta}€</Text>
            </CardItem>

            <CardItem style={styles.cc}>
            <Text>alv 24% :{alv}€</Text>
            </CardItem>

            <CardItem style={styles.cc}>
            <Text>Tuotteiden lukumäärä: {totalmäärä} kappaletta</Text>
            </CardItem>

            <CardItem style={styles.cc}>
            <Text>Summa yhteensä :{totalA}€</Text>
            </CardItem>

            

            </Card>
           
            
            </Card>
          </Form>

          <View style={styles.buttonc}>
          <TouchableOpacity style={styles.buttonfadd} onPress={this.lisaa}>
                <Text>Lisää</Text>
              </TouchableOpacity>

            </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  itemc: {
    borderWidth:1,
    borderColor: 'gray',
    height: 35,
    borderRadius: 5,
  },

  buttonfadd: {
      marginTop: 10,
      color: 'white',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00FF00',
      height: 50,
      width: 125,
      borderRadius: 10,
      borderWidth:1,
      borderColor: 'orange',
      shadowOpacity: 0.7,
      shadowColor: 'yellow',
      shadowRadius: 20,
      shadowOffset: {height:10,width:0},

      padding: 10,
      marginRight: 10
      },

    buttonc: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },

    cc: {
      backgroundColor: '#DCDCDC',
    }
  



      

  
});

export default Checkout;
