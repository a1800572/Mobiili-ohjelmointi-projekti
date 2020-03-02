import React from 'react';
import { View, Text, FlatList, Button, SafeAreaView, Alert } from 'react-native';
import Chair from '../pages/Chair';




class Chairs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tuolidata: this.props.screenProps.tuolidata };
  }

  onSubtract = (item, index) => {
    Alert.alert('Poistettu kärrystä');
    const tuolidata = [...this.state.tuolidata];
    tuolidata[index].quantity -= 1;
    this.setState({ tuolidata });
  }

  onAdd = (item, index) => {
    Alert.alert('Lisätty kärryyn');
    const tuolidata = [...this.state.tuolidata];
    tuolidata[index].quantity += 1;
    this.setState({ tuolidata });
  }

  render() {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.state.tuolidata}
          renderItem={({ item, index }) => (
            <Chair
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

export default Chairs;