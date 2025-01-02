import React from 'react';
import { View, Text, Button, Image, StyleSheet,TextInput } from 'react-native';
const BGImage = require('./Images/DetailsBGImage.jpg');
import { useState } from 'react';
import { AppToggle } from './losshandel';

const WeightGain =({navigation}) =>{
    const [Weight,setWeight]=useState(null);
    const [Hight,setHight]=useState(null);
    const [Age,setAge]=useState(null);
    const [Gender,setGender]=useState(null);
    console.log(Weight,Hight,Age,Gender);


    const handleSubmit=async()=>{
        try {
            const response = await fetch('http://X.X.X.X:5050/weightGain', { //X.X.X.X Replaced by User Ethernet IP
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                weight: Weight,
                height: Hight,
                age: Age,
                gender: Gender,
              }),
            });
            setWeight(null)
            setHight(null)
            setAge(null)
            setGender(null)
            AppToggle();
            navigation.navigate('weekyworkout')


    }catch(error){
        console.log(error);
    }
    }




    return(
        <View style={{flex:1}}>
            <Image source={BGImage} style={styles.backgroundImage} />
            <Text style={{fontSize:20,color:'white',textAlign:'center',backgroundColor: 'black',borderRadius: 10,overflow:'hidden',marginLeft:20,top:20,marginRight:20}}>Weight Gain</Text>
            <Text style={{fontSize:15,textAlign:'justify',top:30,color:'white',marginLeft:20,marginRight:20}}>Enter Your Information</Text>
        <View>
            <TextInput
            style={styles.inputContainer1}
            placeholder='Weight (in kg)'
            keyboardType='numeric'
            value={Weight}
            onChangeText={setWeight}
            />
            <TextInput
            style={styles.inputContainer1}
            placeholder='Hight (in cm)'
            keyboardType='numeric'
            value={Hight}
            onChangeText={setHight}
            />
            <TextInput
            style={styles.inputContainer1}
            placeholder='Age'
            keyboardType='numeric'
            value={Age}
            onChangeText={setAge}
            />
            <TextInput
            style={styles.inputContainer1}
            placeholder='Gender (M/F)'
            value={Gender}
            onChangeText={setGender}
            />
        </View>
        <View style={{top:250,marginLeft:20,marginRight:20}}>
        <Button
        title="Submit"
        color="black"
        onPress={handleSubmit}
        />
        </View>
                </View>
    )
}

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
      inputContainer1: {
        top:150,
        marginLeft:20,
        marginRight:20,
        padding: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: 10,
    
      }
});

export default WeightGain;
