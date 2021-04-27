import React from 'react';
import {
  StyleSheet,
  Text, 
  View,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import MainDrawNavigator from './navigation/MainNavigation';

const App = () => {

  return (
    <PaperProvider>
      <NavigationContainer>
        <MainDrawNavigator/>
      </NavigationContainer>
    </PaperProvider>
      
  );
};

const styles = StyleSheet.create({
  
});

export default App;
