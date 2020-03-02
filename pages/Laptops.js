import React from 'react';
import { View, Text, FlatList, Button, SafeAreaView, Alert } from 'react-native';
import Laptop from '../pages/Laptop'




class Laptops extends React.Component {
  constructor(props) {
    super(props);
    this.state = { laptopdata: this.props.screenProps.laptopdata };
  }

  onSubtract = (item, index) => {
    Alert.alert('Poistettu kärrystä');
    const laptopdata = [...this.state.laptopdata];
    laptopdata[index].quantity -= 1;
    this.setState({ laptopdata });
  }

  onAdd = (item, index) => {
    Alert.alert('Lisätty kärryyn');
    const laptopdata = [...this.state.laptopdata];
    laptopdata[index].quantity += 1;
    this.setState({ laptopdata });
  }

  render() {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.state.laptopdata}
          renderItem={({ item, index }) => (
            <Laptop
              item={item}
              onSubtract={() => this.onSubtract(item, index)}
              onAdd={() => this.onAdd(item, index)}
            />
          )}
          keyExtractor={item => item._id}
        />
      </SafeAreaView>
    );
  }
}

export default Laptops;