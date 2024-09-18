import React, { createContext, useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { openDatabase } from "../api/database/db";
// seu método para abrir o DB

// Crie o contexto
const DatabaseContext = createContext(null);

// Hook para acessar o banco de dados em qualquer lugar
export const useDatabase = () => {
  return useContext(DatabaseContext);
};

// Provider que envolve sua aplicação
export const DatabaseProvider = ({ children }) => {
  const [db, setDb] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        const database = await openDatabase(); // Abre e popula o banco de dados
        setDb(database);
        setLoading(false); // Defina como false quando o banco de dados estiver pronto
      } catch (error) {
        console.error("Erro ao inicializar o banco de dados:", error);
        setLoading(false);
      }
    };

    initializeDatabase();
  }, []);

  if (loading) {
    return <Text>Carregando banco de dados...</Text>; // Exibe um indicador de carregamento enquanto o DB é inicializado
  }

  return (
    <DatabaseContext.Provider value={db}>{children}</DatabaseContext.Provider>
  );
};
