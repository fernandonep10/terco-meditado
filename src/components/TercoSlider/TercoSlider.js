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

  return (
    <View style={styles.sliderContainer}>
      <Carousel
        key={`${loop}`}
        ref={r}
        loop={loop}
        onSnapToItem={(item) => console.log()}
        style={{
          width: width,
          height: PAGE_HEIGHT,
          justifyContent: "center",
          alignItems: "center",
        }}
        width={PAGE_WIDTH}
        height={PAGE_HEIGHT}
        data={DATA}
        pagingEnabled={true} // Ativando paginação para garantir que pare em cada item
        snapEnabled={true} // Ativando o "snap" para travar em cada item
        maxScrollDistancePerSwipe={PAGE_WIDTH} // Definindo para o tamanho do item em pixels
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
