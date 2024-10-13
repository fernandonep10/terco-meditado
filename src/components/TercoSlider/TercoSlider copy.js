import React, { useRef, useState } from "react";
import { Dimensions, Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import styles from "./TercoSliderEstilo";
import { imagens } from "../../../assets/images/imagemMapeamento"; // Importe o mapeamento de imagens

export default function TercoSlider({ misterioAtual }) {
  // Extrair apenas os nomes dos ícones de misterioAtual.oracoes
  const DATA = misterioAtual.oracoes.map((item) => item.icone.split("/").pop());
  const width = Dimensions.get("window").width;
  const PAGE_WIDTH = 60; // Largura de cada item do carrossel
  const PAGE_HEIGHT = 60; // Altura de cada item do carrossel

  const r = useRef(null);
  const [loop, setLoop] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0); // Para rastrear o item atual

  const handleSnapToItem = (index) => {
    console.log(index);
    // Atualizar o índice atual ao "snap"

    setCurrentIndex(index);
  };

  return (
    <View style={styles.sliderContainer}>
      <Carousel
        ref={r}
        loop={false}
        onSnapToItem={handleSnapToItem}
        style={{
          width: width,
          height: PAGE_HEIGHT,
          justifyContent: "center",
          alignItems: "center",
        }}
        width={PAGE_WIDTH}
        height={PAGE_HEIGHT}
        data={DATA}
        maxScrollDistancePerSwipe={60} // Definindo para o tamanho do item em pixels
        renderItem={({ item }) => (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={imagens[item]} // Usando o mapeamento de imagens
              style={{ width: PAGE_WIDTH, height: PAGE_HEIGHT }}
              resizeMode="contain"
            />
          </View>
        )}
      />
    </View>
  );
}
