import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen({ navigation }) {
  const [apidata, setApidata] = useState([])
  useEffect(()=> {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(response => setApidata(response)).then(()=> console.log(apidata))
  }, [])

  

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Voici l'ecran d'accueil</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        onPress={() => navigation.push('Details')}
        title={'Et là on continue d\'aller sur Details'} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title={'Go Back to first screen in stack'} onPress={() => { navigation.popToTop() }} />
    </View>
  );
}

function FavoritesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    </View>
  )
}
/**
 * Création des bottom tabs
 */
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();

function App({ navigate }) {
  return (
    <NavigationContainer >
      <MyTabs />
    </NavigationContainer>

  );
}

/**
 * 
 * <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
 */

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
