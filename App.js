import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import PokemonCard from './components/PokemonCard';


export default function App() {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    const getPokemonData = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/7');
      const data = await res.json();
      setPokemon(data);
    }
    getPokemonData();
  }, [])
  return (
    <PaperProvider>
      <View style={styles.container}>
        {!pokemon ? <ActivityIndicator/> : (
          <PokemonCard name = {pokemon.name}/>
        )}
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
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
