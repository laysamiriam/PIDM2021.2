import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Disciplina from './components/Disciplina';

const nome1 = 'PDIM';
const nome2 = 'Marketing';
const nome3 = 'Projeto IV';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho
        nome='Laysa Miriam Avelino'
        curso='Design Digital'
      />
      <Corpo/>
      <Disciplina nome_disciplina={nome1}/>
      <Disciplina nome_disciplina={nome2}/>
      <Disciplina nome_disciplina={nome3}/>
    </View>
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
