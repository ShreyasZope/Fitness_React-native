import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
const BGImage = require('./Images/BGImage.png');
const HomeIcon = require('./Images/HomeIcon.png');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <Image source={BGImage} style={styles.backgroundImage} />
      <View style={styles.topIconContainer}> {/* Container for top-right icon */}
        <Image source={HomeIcon} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.text}>Welcome to the Fitness App</Text>
      </View>
      <View style={styles.buttonContainer}>
      <Button
        title="Go to Details"
        color="black"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer:{
    justifyContent: 'flex-start',
    alignItems: 'center',
    top:150
  }
  ,
  textContainer:{
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    overflow:'hidden',
    top:100,
    left:20
  },
  backgroundImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%'
  },
  topIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 20,
    marginVertical: 20,
    color: 'white'
  },


});

export default HomeScreen;
