import React from 'react';
import { View, Text, FlatList, Button, SafeAreaView, Alert } from 'react-native';
import Console from '../pages/Console';




class Consoles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { consoledata: this.props.screenProps.consoledata };
  }

  onSubtract = (item, index) => {
    Alert.alert('Poistettu kärrystä');
    const consoledata = [...this.state.consoledata];
    consoledata[index].quantity -= 1;
    this.setState({ consoledata });
  }

  onAdd = (item, index) => {
    Alert.alert('Lisätty kärryyn');
    const consoledata = [...this.state.consoledata];
    consoledata[index].quantity += 1;
    this.setState({ consoledata });
  }

  render() {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.state.consoledata}
          renderItem={({ item, index }) => (
            <Console
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

export default Consoles;