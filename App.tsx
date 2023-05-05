import { StyleSheet, View } from 'react-native'
import React from 'react'
import Home from '././src/screens/home/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TicketList from './src/screens/ticketList/TicketList';
import Summary from './src/screens/summary/Summary';
import ChairSelection from './src/screens/chairSelection/ChairSelection';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='TicketList' component={TicketList} />
        <Stack.Screen name='Summary' component={Summary} />
        <Stack.Screen name='ChairSelection' component={ChairSelection} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;