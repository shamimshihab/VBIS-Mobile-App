import * as React from 'react';
import { Text, View, Button } from 'react-native';

const VBIS_Schedule = ({ navigation }) => {
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

export default VBIS_Schedule;