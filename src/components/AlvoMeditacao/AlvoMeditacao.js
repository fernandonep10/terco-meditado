import React from "react";
import { View, ImageBackground, Text } from "react-native";

import TituloOracao from "../../components/TituloOracao/TituloOracao";
import styles from "./AlvoMeditacaoEstilo";
import { imagens } from "../../../assets/images/imagemMapeamento"; // Importe o mapeamento

export default function AlvoMeditacao({ misterioAtual, tercoAtual }) {
  // Extraímos o nome da imagem do caminho fornecido no JSON (sem os diretórios)
  let imagem = misterioAtual.imagem.split("/").pop(); // Pegamos apenas o nome da imagem

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imagens[imagem]} // Carregamos a imagem do mapeamento
        style={styles.backgroundImage}
      >
        <View style={styles.topContainer}>
          <TituloOracao terco={tercoAtual} misterio={misterioAtual} />
        </View>
      </ImageBackground>
    </View>
  );
}
