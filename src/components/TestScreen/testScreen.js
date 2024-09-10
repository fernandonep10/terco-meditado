import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AlvoMeditacao from '../AlvoMeditacao/AlvoMeditacao';
import BarraOracao from '../BarraOracao/BarraOracao';

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.largeComponent}>
        <AlvoMeditacao/>
      </View> 

      <View style={styles.smallComponent}>
        <Text> teste</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column', // Organiza os componentes na vertical
    },
    largeComponent: {
      flex: 8, // 70% da tela
      backgroundColor: 'darkblue', // Apenas para visualização
      justifyContent: 'center', // Centraliza o texto verticalmente
      
    },
    smallComponent: {
      flex: 2, // 30% da tela
      backgroundColor: 'lightcoral', // Apenas para visualização
      justifyContent: 'center', // Centraliza o texto verticalmente
      alignItems: 'center', // Centraliza o texto horizontalmente
    },
  });