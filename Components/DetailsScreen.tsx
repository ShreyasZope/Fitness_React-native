import React from 'react';
import { View, Text, Button,Image,StyleSheet } from 'react-native';
const BGImage = require('./Images/DetailsBGImage.jpg');

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={BGImage} style={styles.backgroundImage} />
      <Text style={styles.text}>Hello we will be performing your body building exercises</Text>
      <Text style={{color:'white',fontSize:13}}>Please Select Your Goal</Text>
      <View style={{margin:10}}>
        <Button
                title="Weight Loss"
                color="transparent"
                onPress={() => navigation.navigate('WeightLoss')}
              />
      </View>
      <View style={{margin:10}}>
        <Button
                title="Weight Gain"
                color="transparent"
                onPress={() => navigation.navigate('WeightGain')}
              />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: '100%',
        height: '100%'
      },
      text:{fontSize:15,
        color:'white',
        textAlign:'center',
        fontStyle:'italic'}
      
    });


export default DetailsScreen;