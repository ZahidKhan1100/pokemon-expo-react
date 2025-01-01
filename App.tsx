import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import PokemonCard from './components/PokemonCard';
import cards from './components/data';
import pokemonData from './components/pokemon';
import FlatListCard from './components/FlatList';
import Form from './components/Form';

('react-native');

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Form></Form>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cdccf9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
