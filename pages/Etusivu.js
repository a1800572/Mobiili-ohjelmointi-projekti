import React, { Component } from 'react';
import { View, StyleSheet,Image, Text } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { Icon } from 'react-native-elements';

// () => this.props.navigation.navigate('Sivu2')
class Etusivu extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Content>

            
            <View style={[styles.buttonContainer, { marginTop: 25 }]}>  
            
            <Button
            style={styles.button}
            bordered
            onPress={ () => this.props.navigation.navigate('Tuotelista', {tuotteet:this.props.tuotteet})}
            dark>
            <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2fiMUMllpCGzK9ej5z5VGkWd9qlg1DqPcr66qwvhhNxxpPbJ'}}
            style = {{ width: 85, height: 42.5 }} />
            <Text>Electronics</Text>
            </Button>
          
            
            <Button
            style={styles.button}
            bordered
            onPress={ () => this.props.navigation.navigate('Games', {tuotteet:this.props.tuotteet})}
            dark>
            <Image source = {{uri:'https://cdn.pixabay.com/photo/2013/07/13/13/48/controller-161579__340.png'}}
            style = {{ width: 85, height: 42.5 }} />
            <Text>Video Games</Text>
            </Button>
            </View>

      
          <View style={[styles.buttonContainer, { marginTop: 25 }]}>
            <Button
              style={styles.button}
              bordered
              onPress={ () => this.props.navigation.navigate('Consoles', {tuotteet:this.props.tuotteet})}
              dark>
               <Image source = {{uri:'https://i1.wp.com/freepngimages.com/wp-content/uploads/2015/10/playstation-4-games-console.png?fit=835%2C489'}}
               style = {{ width: 85, height: 42.5 }} />
              <Text>Consoles</Text>
            </Button>

            <Button
              style={styles.button}
              bordered
              onPress={ () => this.props.navigation.navigate('Chairs', {tuotteet:this.props.tuotteet})}
              dark>
               <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsFAIcjgns620t_VjXJHuIqyuB-FIO-3a3nMsE_BqJuQ8iu4k1'}}
               style = {{ width: 85, height: 42.5 }} />
              <Text>Chairs</Text>
            </Button>
        </View>


        <View style={[styles.buttonContainer, { marginTop: 25 }]}>
        <Button
              style={styles.button}
              bordered
              onPress={ () => this.props.navigation.navigate('Laptops', {tuotteet:this.props.tuotteet})}
              dark>
               <Image source = {{uri:'https://www.lenovo.com/medias/lenovo-laptop-z50.png?context=bWFzdGVyfGltYWdlc3wxNjA4ODh8aW1hZ2UvcG5nfGltYWdlcy9oYWIvaDdmLzkzNjA5NjcxMzkzNTgucG5nfDAyN2I0NTYxOTNhZGRjMzQ1YWUxYzZlMDFlYzBhMTMzYWY3MjAzMzNkNWI4MzJjMzllZmE0MGY1YWQ0NTM2NTk'}}
               style = {{ width: 85, height: 42.5 }} />
              <Text>Laptops</Text>
            </Button>



        </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 70,
    margin: 5,
    flexDirection: 'column',
  },
});

export default Etusivu;
