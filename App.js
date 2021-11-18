import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button, Alert, Image, TouchableOpacity} from 'react-native';

export default class App extends React.Component {

  // constructor
  constructor()
  {
    super();
    this.state = {
      randomColor: null
    };
  }

  // function to generate random color
  getRandomColor = () => {

    return(
      "rgb("+
      Math.floor(Math.random()*256) + "," +
      Math.floor(Math.random()*256) + "," +
      Math.floor(Math.random()*256) + ")"
    )
  
  }

  myButtonPressed = () =>
  {
    // using getRandomColor function to generate random color
    this.setState({
      randomColor: this.getRandomColor()
    });
  }

  render(){
      return (
    
        <View style={[styles.container, {backgroundColor: this.state.randomColor}]}>
          
          <TouchableOpacity onPress={this.myButtonPressed}>
            <Image 
            source={require('./src/images/duck.gif')} 
            style={styles.imageStyle}
            
            />
          </TouchableOpacity>

        <TouchableOpacity onPress= {this.myButtonPressed}>
          <Text style={styles.text  }>Click Here</Text>
        </TouchableOpacity>
        
        
        </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    backgroundColor : "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,  
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 3,
    alignItems: 'center',
  },
  imageStyle: {
    margin: 20,
    alignItems: 'center',
  }
});
