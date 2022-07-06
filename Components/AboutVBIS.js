import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { getDatabase, ref, get, child, val } from 'firebase/database';
import db from '../firebase-config.js';

const aboutRef = ref(getDatabase(), 'about');

let aboutDescription = null;
get(child(aboutRef, 'aboutVBIS')).then(snapshot => {
  aboutDescription = snapshot.val();
});

const About = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Back"
          onPress={() => navigation.goBack()}
        />
        <Text>{aboutDescription}</Text>
      </View>
    );
}

export default About;