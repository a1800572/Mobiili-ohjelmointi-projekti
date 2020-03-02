import React, { Component } from 'react';
import {Container, Content, List, ListItem, Body, Text} from 'react-native';
import * as SQLite from 'expo-sqlite';
import {View, StyleSheet} from 'react-native';
import {Card, CardItem} from 'native-base';

const db = SQLite.openDatabase('tiedot.db');

export default class Asiakastapahtuma extends Component {
  constructor(props) {
    super(props);
    this.state = { tiedot: [] };
  }

  componentDidMount =  () => {
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

      tx.executeSql(sql, null, null);
    });
  };

  listapahtumat = () => {
    db.transaction(tx => {
      tx.executeSql('select * from tieto', null, this.ok);
    });
  };

  ok = (tx, results) => {
    this.setState({ tiedot: results.rows._array });
  };

  renderItem = tieto => {
    return (
      <View>
      <Card>
      <CardItem avatar style={styles.itemc}>
        <Body>

          <Text style={styles.text}>
          Henkilön {tieto.id} etunimi on {tieto.enimi}
          </Text>

          <Text style={styles.text}>
          Henkilön {tieto.id} sukunimi on {tieto.snimi}
          </Text>

          <Text style={styles.text}>
          Henkilön {tieto.id} työpaikan nimi on {tieto.yritys}
          </Text>

          <Text style={styles.text}>
          Henkilön {tieto.id} osoite on {tieto.osoite}
          </Text>

          <Text style={styles.text}>
          Kaupunki nimi jossa henkilö {tieto.id} asuu on {tieto.kaupunki}
          </Text>

          <Text style={styles.text}>
          Henkilön {tieto.id} postinumero on {tieto.postinro}
          </Text>

          <Text style={styles.text}>
          Maan nimi jossa Henkilön {tieto.id} asuu on {tieto.maa}
          </Text>
          
        </Body>
      </CardItem>
      </Card>
      </View>
    );
  };

  render() {
    this.listapahtumat();
    return (
      <Container style={styles.container}>
        <Content>
          <List dataArray={this.state.tiedot} renderRow={this.renderItem} />
        </Content>
      </Container>
    );
  }
}

const styles =StyleSheet.create({

  container: {
      margin: 20,
      borderWidth:2,
      borderColor: 'black',
      backgroundColor: 'white',
      borderRadius: 10,
      padding:10,
      flexDirection: 'column',
    },

    itemc: {
    borderWidth:1,
    borderColor: 'gray',
    height: 200,
    borderRadius: 5,
    backgroundColor: '#DCDCDC'
  },
    text: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: 'black',
      fontSize: 15,
    },
});
