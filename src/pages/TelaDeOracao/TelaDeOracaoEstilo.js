import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // Organiza os componentes na vertical
  },
  largeComponent: {
    flex: 8, // 70% da tela
    backgroundColor: "darkblue", // Apenas para visualização
    justifyContent: "center", // Centraliza o texto verticalmente
  },
  smallComponent: {
    flex: 2, // 30% da tela
    backgroundColor: "lightcoral", // Apenas para visualização
    justifyContent: "center", // Centraliza o texto verticalmente
    alignItems: "center", // Centraliza o texto horizontalmente
  },
});

export default styles;
