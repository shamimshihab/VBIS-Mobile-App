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


// A possible way of creating courses. 
// Component names CourseName which only handles the name of the course. this name prop would then be passed along.
// However, this seems to break stuff......... Need more research on how to use the navigate and how to pass the navigation address to a component...like passing a variable?
// const CourseName = (props) => {
//   return(
//     <View style={{
//       flex: 0,
//       marginTop: 30,
//       marginLeft:100,
//       backgroundColor: '#ffffff',
//       alignItems: 'center',
//       justifyContent: 'center',}}>
//         <Pressable onPress={() => navigation.navigate(props.title)>
//           <Text>Course name: {props.name}</Text>
//         </Pressable>
//       </View>
//   );

// //   function pressFunction(e){
// //     console.log(e);
// //     ;
// //   }
//  }

const Programs = ({navigation}) => {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Program list here</Text>

        <Button 
          title="ABI 101" 
          onPress={() => navigation.navigate('COURSE', {
            ID: 1,
            name: 'ABI 101',
          })}
        />
        
        {/* <CourseName name='ABI 101'/>
        <CourseName name='ABI 102'/>
        <CourseName name='ABI 103'/>
        <CourseName name='ABI 104'/> */}
      </View>
    );
  }


export default Programs;