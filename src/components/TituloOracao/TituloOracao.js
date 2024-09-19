import React from "react";
import { View, Text } from "react-native";
import styles from "./TituloOracaoEstilo";

export default function TituloOracao({ terco, misterio }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nomeDoTerco}>{terco.title}</Text>
      <Text style={styles.nomeDoMisterio}>{misterio.title}</Text>
    </View>
  );
}
