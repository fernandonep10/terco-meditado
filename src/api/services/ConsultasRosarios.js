// Função para buscar todos os rosários
export const fetchRosarios = async (db) => {
  try {
    // Obtém todas as linhas da tabela `rosarios`
    const allRows = await db.getAllAsync("SELECT * FROM rosarios");

    // Retorna as linhas para uso posterior, caso necessário
    return allRows;
  } catch (error) {
    console.error("Erro ao buscar rosários:", error);
  }
};
