import React from 'react';
import { View, Text, FlatList, Button, SafeAreaView, Alert } from 'react-native';
import Tuote from '../pages/Tuote';




class Tuotelista extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.screenProps.data };
  }

  onSubtract = (item, index) => {
    Alert.alert('Poistettu kärrystä');
    const data = [...this.state.data];
    data[index].quantity -= 1;
    this.setState({ data });
  }

  onAdd = (item, index) => {
    Alert.alert('Lisätty kärryyn');
    const data = [...this.state.data];
    data[index].quantity += 1;
    this.setState({ data });
  }

  render() {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => (
            <Tuote
              item={item}
              onSubtract={() => this.onSubtract(item, index)}
              onAdd={() => this.onAdd(item, index)}
            />
          )}
          keyExtractor={item => item._id.toString()}
        />
      </SafeAreaView>
    );
  }
}

export default Tuotelista;