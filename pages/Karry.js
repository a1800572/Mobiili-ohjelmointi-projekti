import React from 'react';
import { View, Text, FlatList, Button, SafeAreaView } from 'react-native';

//Tämä on testiluokka testausta varten
//Checkout.js on virallinen kärry
//UI on siellä


class Karry extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      gamedata: this.props.screenProps.gamedata,
      data: this.props.screenProps.data,
      consoledata: this.props.screenProps.consoledata,
      tuolidata: this.props.screenProps.tuolidata,
      laptopdata: this.props.screenProps.laptopdata };
  }

  render() {
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

    //ei tarvetta tällähetkellä
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
      <View>
      <Text>Tuotteet: {electroniikanmäärä} kappaletta</Text>
      <Text>Tuotteiden hinta: {electroniikanhinta}€</Text>

      <Text></Text>

      <Text>Pelit: {pelienmäärä} kappaletta</Text>
      <Text>Pelien hinta: {pelienhinta}€</Text>

      <Text></Text>

      <Text>Konsolit: {konsolienmäärä} kappaletta</Text>
      <Text>Konsolien hinta: {konsolienhinta}€</Text>

      <Text></Text>

      <Text>Tuolit: {tuolienmäärä} kappaletta</Text>
      <Text>Tuolien hinta: {tuolienhinta}€</Text>

      <Text></Text>

      <Text>Tietokoneet: {kannettavienmäärä} kappaletta</Text>
      <Text>Tietokoneiden hinta: {kannettavienhinta}€</Text>

      <Text></Text>

      <Text>Summa ei sis Alv: {totalhinta}€</Text>
      <Text>Alv 24%: {alv}€</Text>
      <Text>Summa yhteensä :{totalA}€</Text>

      </View>
    );
  }
}

export default Karry;