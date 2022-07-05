import * as React from 'react';
import { Text, View, Button } from 'react-native';

const Other_Resources = ({ navigation }) => {
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

export default Other_Resources;