import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import OracaoAtual from "../../components/OracaoAtual/OracaoAtual";
import TituloOracao from "../../components/TituloOracao/TituloOracao";
import styles from "./AlvoMeditacaoEstilo";

export default function AlvoMeditacao() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/anunciacao.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.topContainer}>
          <TituloOracao />
        </View>

        <View style={styles.bottomContainer}>
          <OracaoAtual />
        </View>
      </ImageBackground>
    </View>
  );
}
