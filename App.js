import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaDeOracao from "./src/pages/TelaDeOracao/TelaDeOracao";
import PaginaInicial from "./src/pages/PaginaInicial/PaginaInicial";
import { StatusBar, View, Text, ActivityIndicator } from "react-native";
import { DatabaseProvider } from "./src/context/DatabaseContext"; // Importe o Provider

const Stack = createStackNavigator();

export default function App() {
  return (
    <DatabaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PaginaInicial">
          <Stack.Screen
            name="PaginaInicial"
            component={PaginaInicial}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TelaDeOracao"
            component={TelaDeOracao}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DatabaseProvider>
  );
}
