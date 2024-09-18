import React from 'react';
import {View, Text} from 'react-native'
import styles from './TituloOracaoEstilo';

export default function TituloOracao() {
  return (
    <View>
      <Text style={styles.textoBranco}>Titulo</Text>
    </View>
  );
}