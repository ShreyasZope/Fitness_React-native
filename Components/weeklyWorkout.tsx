import React from 'react';
import { View, Text, Button,Modal, Image, StyleSheet,TextInput,ScrollView } from 'react-native';
const BGImage = require('./Images/DetailsBGImage.jpg');
import { useState } from 'react';
import {Loss} from './losshandel';

const weekyworkout= ()=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    console.log(Loss);
    const weightGainWorkouts={
        "Monday": {
          "workouts": [
            "Chest and Triceps",
            "Bench Press: 3 sets of 8-12 reps",
            "Incline Dumbbell Press: 3 sets of 8-12 reps",
            "Decline Dumbbell Press: 3 sets of 8-12 reps",
            "Close-Grip Bench Press: 3 sets of 8-12 reps",
            "Overhead Dumbbell Extension: 3 sets of 10-15 reps",
            "Cable Pushdowns: 3 sets of 12-15 reps"
          ]
        },
        "Tuesday": {
          "workouts": [
            "Back and Biceps",
            "Pull-ups: 3 sets to failure",
            "Bent-Over Rows: 3 sets of 8-12 reps",
            "Lat Pulldowns: 3 sets of 10-15 reps",
            "Seated Cable Rows: 3 sets of 10-15 reps",
            "Barbell Curls: 3 sets of 8-12 reps",
            "Hammer Curls: 3 sets of 10-15 reps",
            "Concentration Curls: 3 sets of 12-15 reps"
          ]
        },
        "Wednesday": {
          "workouts": [
            "Leg and Shoulder",
            "Squats: 3 sets of 8-12 reps",
            "Leg Press: 3 sets of 10-15 reps",
            "Leg Extensions: 3 sets of 12-15 reps",
            "Hamstring Curls: 3 sets of 12-15 reps",
            "Overhead Press: 3 sets of 8-12 reps",
            "Lateral Raises: 3 sets of 10-15 reps",
            "Front Raises: 3 sets of 10-15 reps"
          ]
        },
        "Thursday": {
          "workouts": [
            "Rest or Active Recovery",
            "Light cardio (walking, swimming, cycling)",
            "Yoga or stretching"
          ]
        },
        "Friday": {
          "workouts": [
            "Full Body Circuit",
            "Burpees: 3 sets of 10-15 reps",
            "Mountain Climbers: 3 sets of 30-60 seconds",
            "Jump Squats: 3 sets of 10-15 reps",
            "Push-ups: 3 sets to failure",
            "Plank: 3 sets of 30-60 seconds"
          ]
        },
        "Saturday": {
          "workouts": [
            "Long Cardio and Core",
            "Running, cycling, or swimming (45-60 minutes)",
            "Crunches: 3 sets of 20-25 reps",
            "Leg Raises: 3 sets of 15-20 reps",
            "Russian Twists: 3 sets of 15-20 reps per side"
          ]
        },
        "Sunday": {
          "workouts": [
            "Rest and Recovery",
            "Focus on relaxation and stretching"
          ]
        }
      };

    const weightLossWorkouts = {
        "Monday": {
          "workouts": [
            "Cardio and Core",
            "Warm-up (5 minutes)",
            "Treadmill Intervals: 30 seconds high intensity, 30 seconds low intensity, repeat for 20 minutes",
            "Crunches: 3 sets of 20 reps",
            "Plank: 3 sets of 30-60 seconds hold",
            "Bicycle Crunches: 3 sets of 15 reps per side",
            "Cool-down (5 minutes)"
          ]
        },
        "Tuesday": {
          "workouts": [
            "Upper Body Strength",
            "Push-ups: 3 sets of as many reps as possible (AMRAP)",
            "Dumbbell Rows: 3 sets of 10-12 reps per arm",
            "Overhead Press: 3 sets of 10-12 reps",
            "Bicep Curls: 3 sets of 10-12 reps",
            "Triceps Extensions: 3 sets of 10-12 reps"
          ]
        },
        "Wednesday": {
          "workouts": [
            "Lower Body and Flexibility",
            "Squats: 3 sets of 12-15 reps",
            "Lunges: 3 sets of 10-12 reps per leg",
            "Glute Bridges: 3 sets of 15-20 reps",
            "Calf Raises: 3 sets of 15-20 reps",
            "Stretching (15-20 minutes)"
          ]
        },
        "Thursday": {
          "workouts": [
            "Active Recovery",
            "Yoga (30 minutes)",
            "Walking or light cycling (30 minutes)"
          ]
        },
        "Friday": {
          "workouts": [
            "Full Body Strength",
            "Deadlifts: 1 set of 5 reps, 1 set of 3 reps, 1 set of 1 rep (increase weight each set)",
            "Pull-ups or Lat Pulldowns: 3 sets of AMRAP",
            "Walking Lunges: 3 sets of 10-12 reps per leg",
            "Dips: 3 sets of AMRAP",
            "Overhead Press: 3 sets of 8-10 reps"
          ]
        },
        "Saturday": {
          "workouts": [
            "Long Cardio",
            "Running, cycling, or swimming (60 minutes)"
          ]
        },
        "Sunday": {
          "workouts": [
            "Rest and Recovery"
          ]
        }
      };
      
      

    const openModal = (day) => {
        setSelectedDay(day);
        setModalVisible(true);


      };


    return(
        <View style={{flex:1}}>
            <Image source={BGImage} style={styles.backgroundImage} />
            <Text style={{fontSize:20,color:'white',textAlign:'center',backgroundColor: 'black',borderRadius: 10,overflow:'hidden',marginLeft:20,top:20,marginRight:20}}>Weekly Workout</Text>
            <View style={{top: 100, flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'center',marginHorizontal: 20,}}>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
        <View style={{margin:10}}>
        <Button color={selectedDay === day ? 'black' : 'transparent'} key={day} title={day} onPress={() => openModal(day)} />
        </View>
      ))}
      </View>
      
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <Text style={{ fontSize: 20, marginBottom: 10, color: selectedDay === 'Sunday' ? 'red' : 'blue' }}>{selectedDay}</Text>
          <ScrollView style={styles.workoutList}>
            {Loss ? (
                weightLossWorkouts[selectedDay]?.workouts.map((workout, index) => (
                    <Text key={index} style={styles.workoutItem}>{workout}</Text>
                ))
            ) : (
                weightGainWorkouts[selectedDay]?.workouts.map((workout, index) => (
                    <Text key={index} style={styles.workoutItem}>{workout}</Text>
                ))
            )}
</ScrollView>


            <Button title="Close" color='black' onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

            
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
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems:'center'
      },
    workoutList: {
        maxHeight: '70%',
        width: '100%',
    },
    workoutItem: {
        fontSize: 16,
        color: 'black',
        marginBottom: 5,
        textAlign: 'flex-start',
    },
    });


export default weekyworkout;