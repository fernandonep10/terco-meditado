import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // Organiza os componentes na vertical
  },
  largeComponent: {
    flex: 7, // 70% da tela
    backgroundColor: "darkblue", // Apenas para visualização
    justifyContent: "center", // Centraliza o texto verticalmente
    zIndex: 0,
  },
  smallComponent: {
    flex: 3, // 30% da tela
    backgroundColor: "rgba(0, 0, 0, 1)", // Fundo branco com 50% de transparência
    zIndex: 1,
    backgroundColor: "black",
  },
});

export default styles;
