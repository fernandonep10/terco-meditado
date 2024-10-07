import React from "react";
import { View, Button } from "react-native";
import OracaoAtual from "../../components/OracaoAtual/OracaoAtual";
import PlayerDaOracao from "../../components/PlayerDaOracao/PlayerDaOracao";
import TercoSlider from "../../components/TercoSlider/TercoSlider";
import styles from "./ControleDaOracaoEstilo"; // Crie um arquivo de estilos separado, se necessário

export default function ControlesDeOracao({
  proximoMisterioOuTerco,
  misterioAtual,
  tercoAtual,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.oracaoAtual}>
        <OracaoAtual />
      </View>

      <View style={styles.playerDaOracao}>
        <PlayerDaOracao />
      </View>

      <View style={styles.tercoSlider}>
        <TercoSlider
          proximoMisterioOuTerco={proximoMisterioOuTerco}
          misterioAtual={misterioAtual}
          tercoAtual={tercoAtual}
        />
      </View>
    </View>
  );
}
