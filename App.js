import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import testScreen from "./src/components/TestScreen/testScreen";
import { StatusBar } from "react-native";
import {
  setupDatabase,
  fetchRosarioList,
  fetchRosarioDetails,
} from "./src/database/db";

StatusBar.setHidden(true); // Oculta a barra de status
StatusBar.setHidden(true, "slide"); // Oculta a barra de status com um efeito de deslizamento

const Stack = createStackNavigator();

export default function App() {
  const [rosarios, setRosarios] = useState([]);

  useEffect(() => {
    const initDB = async () => {
      try {
        await setupDatabase();
        console.log("Banco de dados configurado com sucesso.");
        // Depois que o banco de dados foi configurado, buscar a lista de rosários
        await recoveryRosarioList();
      } catch (error) {
        console.error("Erro ao configurar o banco de dados:", error);
      }
    };

    const recoveryRosarioList = async () => {
      try {
        await fetchRosarioList((data) => {
          if (data.length > 0) {
            setRosarios(data);
            console.log("Rosários recuperados com sucesso:", data);
          } else {
            console.log("Nenhum rosário encontrado.");
          }
        });
      } catch (error) {
        console.error("Erro ao recuperar rosários:", error);
      }
    };

    initDB();
  }, []);

  useEffect(() => {
    if (rosarios.length > 0) {
      console.log("Rosários disponíveis:", rosarios);
    } else {
      console.log("Lista de rosários ainda está vazia.");
    }
  }, [rosarios]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="testScreen">
        <Stack.Screen
          name="testScreen"
          component={testScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
