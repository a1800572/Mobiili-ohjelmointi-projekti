import React from 'react';
import { View, Text, FlatList, Button, SafeAreaView, Alert } from 'react-native';
import Game from '../pages/Game'




class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gamedata: this.props.screenProps.gamedata };
  }

  onSubtract = (item, index) => {
    Alert.alert('Poistettu kärrystä');
    const gamedata = [...this.state.gamedata];
    gamedata[index].quantity -= 1;
    this.setState({ gamedata });
  }

  onAdd = (item, index) => {
    Alert.alert('Lisätty kärryyn');
    const gamedata = [...this.state.gamedata];
    gamedata[index].quantity += 1;
    this.setState({ gamedata });
  }

  render() {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.state.gamedata}
          renderItem={({ item, index }) => (
            <Game
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

export default Games;