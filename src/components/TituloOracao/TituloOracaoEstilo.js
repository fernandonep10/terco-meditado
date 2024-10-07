import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o contêiner ocupar todo o espaço disponível
    justifyContent: "center", // Centraliza os itens verticalmente
    alignItems: "center", // Centraliza os itens horizontalmente
    flexDirection: "column",
  },
  nomeDoTerco: {
    color: "white",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 28,
    paddingTop: 25,
  },
  nomeDoMisterio: {
    color: "white",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 28,
    textAlign: "center",
  },
});

export default styles;
