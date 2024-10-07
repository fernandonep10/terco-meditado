import { StyleSheet, Dimensions } from "react-native";

const ITEM_SIZE = 25; // Ajuste do tamanho do item
const ACTIVE_ITEM_SCALE = 2; // Escala aumentada para destacar o item ativo
const INACTIVE_ITEM_SCALE = 3; // Redução da escala do item inativo
const SPACING = 55; // Espaçamento entre as contas
const ITEM_FULL_SIZE = ITEM_SIZE + SPACING;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  sliderContainer: {
    backgroundColor: "#ADD8E6", // Fundo azul claro
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: height * 0.2, // Garantindo que o container ocupe 20% da tela
    paddingVertical: 22, // Ajuste do padding vertical
  },
  carousel: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
