import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { getDatabase, ref, get, child, val } from 'firebase/database';
import db from '../firebase-config.js';

const Programs = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

export default Programs;