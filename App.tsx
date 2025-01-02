import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen';
import DetailsScreen from './Components/DetailsScreen';
import WeightLoss from './Components/WeightLoss';
import WeightGain from './Components/WeightGain';
import weekyworkout from './Components/weeklyWorkout';



enableScreens();
const Stack = createNativeStackNavigator();

function App() {
  console.log("Hello")
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="WeightLoss" component={WeightLoss} />
        <Stack.Screen name="WeightGain" component={WeightGain} />
        <Stack.Screen name="weekyworkout" component={weekyworkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
