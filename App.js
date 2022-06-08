import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App(props) {
  //const { onPress, title = 'Save' } = props;
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  
  return (
    <View style={styles.columnContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.logo}>
          <Image 
            style={{width:120, height: 50}}
            source={require('./VBIS_Logo.png')} />
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
            onPress={() => Alert.alert('ABOUT VBIS')}
          >
            <Text style={styles.buttonText}>ABOUT VBIS</Text>
          </Pressable>
        </View>
        <View style={styles.button1}>
          <Pressable
            color="#f194ff"
            onPress={() => Alert.alert('PROGRAMS')}
          >
            <Text style={styles.buttonText}>PROGRAMS</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.button2}>
          <Pressable
            color="#f194ff"
            onPress={() => Alert.alert('MY SCHEDULE')}
          >
            <Text style={styles.buttonText}>MY SCHEDULE</Text>
          </Pressable>
        </View>
        <View style={styles.button2}>
          <Pressable
            color="#f194ff"
            onPress={() => Alert.alert('VBIS SHCEDULE')}
          >
            <Text style={styles.buttonText}>VBIS SHCEDULE</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.button3}>
          <Pressable
            color="#f194ff"
            onPress={() => Alert.alert('NEWSLETTER')}
          >
            <Text style={styles.buttonText}>NEWSLETTER</Text>
          </Pressable>
        </View>
        <View style={styles.button3}>
          <Pressable
            color="#f194ff"
            onPress={() => Alert.alert('SETTINGS')}
          >
            <Text style={styles.buttonText}>SETTINGS</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

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
    marginRight: 45,
    width: 125,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tutorial:{
    marginTop: 50,
    marginRight: 45,
    width: 125,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#89B589'
  },
  button1: {
    marginTop: 20,
    marginRight: 45,
    width: 125,
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#89B589'
  },
  button2: {
    marginTop: 20,
    marginRight: 45,
    width: 125,
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#89B589'
  },
  button3: {
    marginTop: 20,
    marginRight: 45,
    width: 125,
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#89B589'
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'OpenSans',
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
    color: '#000000'
  }
});
