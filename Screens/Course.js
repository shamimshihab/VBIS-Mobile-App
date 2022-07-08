import { StatusBar } from 'expo-status-bar';
//import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { db } from '../firebase-config.js';
import { getDatabase, ref, get, child } from 'firebase/database';

function Course ({navigation, route}){
  const {ID} = route.params.ID;
  console.log(ID);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello User, Welcome to {ID}</Text>
        <Button title="Go Back to Programs" onPress={() => navigation.navigate('Programs')}/>
      </View>
    );
}

export default Course;