import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading } from 'native-base';
import { Image, StyleSheet, Text } from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements';
import Tuotelista from '../pages/Tuotelista';
import Homescreen from '../pages/Homescreen';

export default class Tabs1 extends Component {
  constructor(props) {
    super(props);
    this.state = { tuotteet: this.props.tuotteet };
  }
  render() {
    return (
      <Container style={styles.container}>
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Icon name="home" type="font-awesome" />
                <Text>Home</Text>
              </TabHeading>
            }>
            <Text style={styles.header}>Kotisivu</Text>
            <Homescreen/>
          </Tab>

          <Tab
            heading={
              <TabHeading>
                <Icon name="dollar" type="font-awesome" />
                <Text>Store</Text>
              </TabHeading>
            }>
            <Text style={styles.header}>Tuote valikoima</Text>

            <Tuotelista tuotteet={this.state.tuotteet} />
          </Tab>

          <Tab
            heading={
              <TabHeading>
                <Icon name="cart-plus" type="font-awesome" />
                <Text>Checkout</Text>
              </TabHeading>
            }>
            <Text style={styles.header}>Kassa</Text>
          </Tab>

          <Tab
            heading={
              <TabHeading>
                <Icon name="umbrella" type="font-awesome" />
                <Text>Calendar</Text>
              </TabHeading>
            }>
            <Text style={styles.header}>Kalenteri</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },

  header: {
    backgroundColor: '#9ACD32',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    width: null,
    color: 'gray',
    lineHeight: 32,
    fontStyle: 'italic',
  },
});
