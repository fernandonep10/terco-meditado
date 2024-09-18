import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import AlvoMeditacao from "../AlvoMeditacao/AlvoMeditacao";
import BarraOracao from "../../components/BarraOracao/BarraOracao";
import styles from "./TelaDeOracaoEstilo";
import { useDatabase } from "../../context/DatabaseContext"; // Importe o hook
import { fetchRosarioDetalhe } from "../../api/services/DetalhesRosario";
import * as FileSystem from "expo-file-system";

export default function TelaDeOracao({ route }) {
  const idRosario = route.params.rosario.id;

  const db = useDatabase(); // Acessa o banco de dados via Contexto
  const [rosario, setRosario] = useState([]); // Estado para armazenar os rosários

  useEffect(() => {
    const fetchData = async () => {
      if (db) {
        try {
          const resultado = await fetchRosarioDetalhe(db, idRosario); // Espera a resposta assíncrona
          setRosario(resultado); // Define o estado com os dados obtidos
        } catch (error) {
          console.error("Erro ao buscar detalhes do rosário:", error);
        }
      }
    };

    fetchData(); // Chama a função para buscar os dados
  }, [db]);

  //console.log(JSON.stringify(rosario, null, 2));

  return (
    <ScrollView>
      <Text selectable>{JSON.stringify(rosario, null, 2)}</Text>
    </ScrollView>
  );

  /* return (
    <View style={styles.container}>
      <View style={styles.largeComponent}>
        <AlvoMeditacao />
      </View>

      <View style={styles.smallComponent}>
        <Text> teste</Text>
      </View>
    </View>
  ); */
}
