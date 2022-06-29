import { StatusBar } from 'expo-status-bar';
//import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import database from '@react-native-firebase/database';

//const reference = database().ref('https://console.firebase.google.com/u/0/project/vbis-test/database/vbis-test-default-rtdb/data/~2F');

function HomePage({navigation}) {
  //const { onPress, title = 'Save' } = props;
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  
  return (
    <View style={styles.columnContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.logo}>
          <Image 
            style={{width:130, height: 50}}
            source={require('./VBIS_Logo.png')} />
        </View>
        <View style={styles.setting}>
          <Image 
            style={{width:30, height: 30}}
            source={require('./Setting.png')}
            onPress={() => navigation.navigate('SETTING')}
          />
        </View>
        <View style={styles.tutorial}>
          <Pressable
            color="#f194ff"
            onPress={() => Alert.alert('TUTORIAL')}
          >
            <Text style={styles.buttonText}>TUTORIAL</Text>
          </Pressable>
        </View>
      </View>
      <Searchbar
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.rowContainer}>
        <View style={styles.button1}>
          <Pressable
            color="#f194ff"
            onPress={() => navigation.navigate('ABOUT_VBIS')}
          >
            <Text style={styles.buttonText}>ABOUT VBIS</Text>
          </Pressable>
        </View>
        <View style={styles.button1}>
          <Pressable
            color="#f194ff"
            onPress={() => navigation.navigate('PROGRAMS')}
          >
            <Text style={styles.buttonText}>PROGRAMS</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.button2}>
          <Pressable
            color="#f194ff"
            onPress={() => navigation.navigate('MY_SCHEDULE')}
          >
            <Text style={styles.buttonText}>MY SCHEDULE</Text>
          </Pressable>
        </View>
        <View style={styles.button2}>
          <Pressable
            color="#f194ff"
            onPress={() => navigation.navigate('VBIS_SCHEDULE')}
          >
            <Text style={styles.buttonText}>VBIS SHCEDULE</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.button3}>
          <Pressable
            color="#f194ff"
            onPress={() => navigation.navigate('RESOURCES')}
          >
            <Text style={styles.buttonText}>OTHER RESOURCES</Text>
          </Pressable>
        </View>
        <View style={styles.button3}>
          <Pressable
            color="#f194ff"
            onPress={() => navigation.navigate('NEWSLETTER')}
          >
            <Text style={styles.buttonText}>NEWS</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.button4}>
          <Pressable
            color="#f194ff"
            onPress={() => Alert.alert('CALL VBIS')}
          >
            <Text style={styles.buttonText}>CONTACT VBIS</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

function AboutVBIS({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('ABOUT_VBIS')}
      />
    </View>
  );
}

function Program({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{reference.once('value').val()}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('PROGRAMS')}
      />
    </View>
  );
}

function MySchedule({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('MY_SCHEDULE')}
      />
    </View>
  );
}

function VBISSchedule({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('VBIS_SCHEDULE')}
      />
    </View>
  );
}

function OtherResources({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('RESOURCES')}
      />
    </View>
  );
}

function Newsletter({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('NEWSLETTER')}
      />
    </View>
  );
}

function Setting({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('SETTINGS')}
      />
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HOME" component={HomePage} />
        <Stack.Screen name="ABOUT_VBIS" component={AboutVBIS} />
        <Stack.Screen name="PROGRAMS" component={Program} />
        <Stack.Screen name="MY_SCHEDULE" component={MySchedule} />
        <Stack.Screen name="VBIS_SCHEDULE" component={VBISSchedule} />
        <Stack.Screen name="RESOURCES" component={OtherResources} />
        <Stack.Screen name="NEWSLETTER" component={Newsletter} />
        <Stack.Screen name="SETTINGS" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  title: {
    flex: 0,
    marginTop: 10,
    marginLeft:100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: "row" ,
    marginLeft: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnContainer: {
    flexDirection: "column" ,
    marginLeft: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar:{
    marginTop: 20,
    marginRight: 30,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginTop: 50,
    marginRight: 20,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setting:{
    marginTop: 50,
    marginRight: 15,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#89B589'
  },
  tutorial:{
    marginTop: 50,
    marginRight: 45,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#89B589'
  },
  button1: {
    marginTop: 20,
    marginRight: 45,
    width: 125,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#89B589'
  },
  button2: {
    marginTop: 20,
    marginRight: 45,
    width: 125,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#89B589'
  },
  button3: {
    marginTop: 20,
    marginRight: 45,
    width: 125,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#89B589'
  },
  button4: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 45,
    marginBottom: 100,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#89B589'
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'OpenSans-Medium',
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
    color: '#000000'
  }
});