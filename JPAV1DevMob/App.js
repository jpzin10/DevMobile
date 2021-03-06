// João Pedro Gomes de Lemos
// 0050016060
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home.js'
import QuizBR from './components/QuizBR.js'
import Instrucoes from './components/Instrucoes.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name = "Bem vindo!" component={Home}/>
        <Stack.Screen name = "QuizBR" component={QuizBR}/>
        <Stack.Screen name = "Instrucoes" component={Instrucoes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
