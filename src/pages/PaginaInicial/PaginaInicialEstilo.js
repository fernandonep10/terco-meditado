import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center", // Centraliza verticalmente o conteúdo
    alignItems: "center", // Centraliza horizontalmente o conteúdo
    flexGrow: 1, // Garante que o conteúdo ocupe todo o espaço disponível
  },
  linkText: {
    color: "blue", // Cor azul para parecer um link
    fontSize: 18,
    marginBottom: 10,
  },
});

export default styles;
