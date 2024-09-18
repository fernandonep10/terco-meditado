import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { fetchRosarios } from "../../api/services/ConsultasRosarios";
import { useDatabase } from "../../context/DatabaseContext"; // Importe o hook
import { useNavigation } from "@react-navigation/native"; // Hook para navegação
import styles from "./PaginaInicialEstilo";

const PaginaInicial = () => {
  const db = useDatabase(); // Acessa o banco de dados via Contexto
  const [rosarios, setRosarios] = useState([]); // Estado para armazenar os rosários
  const navigation = useNavigation(); // Para navegação

  useEffect(() => {
    if (db) {
      fetchRosarios(db).then((rosarios) => {
        setRosarios(rosarios); // Armazena os rosários no estado
      });
    }
  }, [db]);

  const handleRosarioPress = (rosario) => {
    // Função para navegar para a próxima tela ao clicar no rosário
    navigation.navigate("TelaDeOracao", { rosario });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleRosarioPress(item)}>
      <Text style={styles.linkText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={rosarios} // Dados da lista
        keyExtractor={(item) => item.id.toString()} // Chave única para cada item
        renderItem={renderItem} // Função que renderiza cada item
        contentContainerStyle={styles.contentContainer} // Centraliza o conteúdo
      />
    </View>
  );
};

export default PaginaInicial;
