import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import AlvoMeditacao from "../AlvoMeditacao/AlvoMeditacao";
import BarraOracao from "../../components/BarraOracao/BarraOracao";
import styles from "./TelaDeOracaoEstilo";
import { useDatabase } from "../../context/DatabaseContext"; // Importe o hook
import { fetchRosarioDetalhe } from "../../api/services/DetalhesRosario";

export default function TelaDeOracao({ route }) {
  const idRosario = route.params.rosario.id;

  const db = useDatabase(); // Acessa o banco de dados via Contexto
  const [rosario, setRosario] = useState([]); // Estado para armazenar os rosários
  const [tercoAtual, setTercoAtual] = useState(0); // Controla o terço atual
  const [misterioAtual, setMisterioAtual] = useState(0); // Controla o mistério atual

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

  //console.log(JSON.stringify(rosario, null, 1));
  //console.log(rosario);

  /*  return (
    <ScrollView>
      <Text selectable>{JSON.stringify(rosario, null, 2)}</Text>
    </ScrollView>
  ); */

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

  // Função para avançar no mistério e no terço
  const proximoMisterioOuTerco = () => {
    const terco = rosario.tercos[tercoAtual];

    console.log(terco);

    /*  // Verifica se há mais mistérios no terço atual
    if (misterioAtual < terco.misterios.length - 1) {
      setMisterioAtual(misterioAtual + 1); // Avança para o próximo mistério
    }
    // Se não houver mais mistérios no terço, verifica se há mais terços no rosário
    else if (tercoAtual < rosario.tercos.length - 1) {
      setTercoAtual(tercoAtual + 1); // Avança para o próximo terço
      setMisterioAtual(0); // Reseta para o primeiro mistério do novo terço
    }
    // Se não houver mais terços, o rosário está completo
    else {
      console.log("Rosário completo!");
    } */
  };

  /*  // Pega o terço e o mistério atuais
  const terco = rosario.tercos[tercoAtual];
  const misterio = terco.misterios[misterioAtual];

  return (
    <View style={styles.container}>
      <View style={styles.largeComponent}>
        <AlvoMeditacao misterioAtual={misterio} />
      </View>

      <View style={styles.smallComponent}>
        <Button title="Próximo" onPress={proximoMisterioOuTerco} />
      </View>
    </View>
  ); */
}
