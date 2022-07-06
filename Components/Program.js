import { StatusBar } from 'expo-status-bar';
//import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import * as React from 'react';
import { StyleSheet, Text, Button, View, Alert, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Drawer } from 'react-native-paper';
import { watchPositionAsync } from 'exponent/src/Location';
import { NavigationEvents, TabRouter } from 'react-navigation';
import Course from './Course';

// const CourseName = (props) => {
//   return(
//     <View style={{
//       flex: 0,
//       marginTop: 30,
//       marginLeft:100,
//       backgroundColor: '#ffffff',
//       alignItems: 'center',
//       justifyContent: 'center',}}>
//         <Pressable onPress={() => pressFunction(props.name)}>
//           <Text>Course name: {props.name}</Text>
//         </Pressable>
//       </View>
//   );

//   function pressFunction(e){
//     console.log(e);
//     navigation.navigate('COURSES');
//   }
// }

const Programs = ({navigation}) => {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Program list here</Text>

        {// Making nested pages is as simple as creating this onPress prop and making it navigate to 'HERE'}
        <Button 
          title="ABI 101" 
          onPress={() => navigation.navigate('COURSE')}
        />



        {/* <CourseName name='ABI 101'/>
        <CourseName name='ABI 102'/>
        <CourseName name='ABI 103'/>
        <CourseName name='ABI 104'/> */}
      </View>
    );
  }


export default Programs;