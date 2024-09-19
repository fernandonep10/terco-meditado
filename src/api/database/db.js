import * as SQLite from "expo-sqlite";
import createAndPopulateTables from "./setupdatabaseResumido";

let db = null;

// Função para abrir ou criar o banco de dados
const openDatabase = async () => {
  try {
    // Abre o banco de dados de forma síncrona
    db = await SQLite.openDatabaseAsync("tercoDB.db");

    // Verifica se a conexão foi bem-sucedida
    if (db) {
      // Chama a função que cria e popula as tabelas
      await createAndPopulateTables(db);
    } else {
      console.error(
        "Erro ao abrir o banco de dados: `db` é null ou indefinido."
      );
    }

    return db;
  } catch (error) {
    console.error("Erro ao abrir o banco de dados:", error);
  }
};

// Exporta a função e a conexão para que possam ser usadas em outros arquivos
export { openDatabase, db };
