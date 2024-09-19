import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Faz com que a imagem cubra toda a área
  },
  topContainer: {
    position: "absolute", // Posiciona o componente no topo
    top: 0,
    left: 0,
    right: 0,
    height: "15%", // Ocupa 10% da altura do componente
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo branco com 50% de transparência
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default styles;
