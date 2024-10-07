import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import AlvoMeditacao from "../../components/AlvoMeditacao/AlvoMeditacao";
import ControleDaOracao from "../../components/ControleDaOracao/ControleDaOracao";
import styles from "./TelaDeOracaoEstilo";
import { useDatabase } from "../../context/DatabaseContext";
import { fetchRosarioDetalhe } from "../../api/services/DetalhesRosario";

export default function TelaDeOracao({ route }) {
  const idRosario = route.params.rosario.id;
  const db = useDatabase();
  const [rosario, setRosario] = useState([]); // Inicializa como array
  const [tercoAtual, setTercoAtual] = useState(0); // Controla o terço atual
  const [misterioAtual, setMisterioAtual] = useState(0); // Controla o mistério atual

  useEffect(() => {
    const fetchData = async () => {
      if (db) {
        try {
          const resultado = await fetchRosarioDetalhe(db, idRosario);
          setRosario(resultado);

          // Inicializa com o primeiro terço e primeiro mistério automaticamente
          if (
            resultado.length > 0 &&
            resultado[0].tercos &&
            resultado[0].tercos.length > 0
          ) {
            setTercoAtual(0); // Primeiro terço
            if (
              resultado[0].tercos[0].misterios &&
              resultado[0].tercos[0].misterios.length > 0
            ) {
              setMisterioAtual(0); // Primeiro mistério
            }
          }
        } catch (error) {
          console.error("Erro ao buscar detalhes do rosário:", error);
        }
      }
    };

    fetchData();
  }, [db]);

  if (!rosario.length || !rosario[0].tercos || rosario[0].tercos.length === 0) {
    return <Text>Carregando...</Text>;
  }

  const rosarioSelecionado = rosario[0];
  const terco = rosarioSelecionado.tercos[tercoAtual];
  const misterio = terco.misterios[misterioAtual];

  const proximoMisterioOuTerco = () => {
    if (misterioAtual < terco.misterios.length - 1) {
      setMisterioAtual(misterioAtual + 1); // Avança para o próximo mistério
    } else if (tercoAtual < rosarioSelecionado.tercos.length - 1) {
      setTercoAtual(tercoAtual + 1); // Avança para o próximo terço
      setMisterioAtual(0); // Reseta para o primeiro mistério do novo terço
    } else {
      console.log("Rosário completo!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.largeComponent}>
        <AlvoMeditacao misterioAtual={misterio} tercoAtual={terco} />
      </View>

      <View style={styles.smallComponent}>
        <ControleDaOracao
          proximoMisterioOuTerco={proximoMisterioOuTerco}
          misterioAtual={misterio}
          tercoAtual={terco}
        />
      </View>
    </View>
  );
}
