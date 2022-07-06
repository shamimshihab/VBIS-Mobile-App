import * as React from 'react';
import { Text, View, Button, Pressable } from 'react-native';
import { getDatabase, ref, get, child, val } from 'firebase/database';
import db from '../firebase-config.js';

const programsRef = ref(getDatabase(), 'programs');
let programList = [];
get(programsRef).then(snapshot => {
  snapshot.forEach(item => {
    const temp = item;
    programList.push(temp);
  })
});

const Programs = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Back"
          onPress={() => navigation.goBack()}
        />
        {programList.map((item) =>
          <View key={item.key}>
            <Pressable>
              <Text>{ item.val().name }</Text>
            </Pressable>
          </View>
        )}
      </View>
    );
  }

export default Programs;