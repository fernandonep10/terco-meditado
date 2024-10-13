import * as React from "react";
import { View, Dimensions, Image } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { imagens } from "../../../assets/images/imagemMapeamento"; // Importe o mapeamento de imagens

const PAGE_WIDTH = 60; // Largura de cada item do carrossel
const PAGE_HEIGHT = 60; // Altura de cada item do carrossel

function Index({ misterioAtual }) {
  const width = Dimensions.get("window").width;
  const DATA = misterioAtual.oracoes.map((item) => item.icone.split("/").pop());

  const r = React.useRef(null);

  return (
    <Carousel
      ref={r}
      loop={false}
      style={{
        width: width,
        height: PAGE_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        flex: 1,
      }}
      width={PAGE_WIDTH}
      height={PAGE_HEIGHT}
      data={DATA}
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
  );
}

export default Index;

const Item = (props) => {
  const { animationValue, label } = props;

  const translateY = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );

    return {
      opacity,
    };
  }, [animationValue]);

  const labelStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [1, 1.25, 1],
      Extrapolate.CLAMP
    );

    const color = interpolateColor(
      animationValue.value,
      [-1, 0, 1],
      ["#b6bbc0", "#0071fa", "#b6bbc0"]
    );

    return {
      transform: [{ scale }, { translateY: translateY.value }],
      color,
    };
  }, [animationValue, translateY]);

  return (
    <Animated.View
      style={[
        {
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        },
        containerStyle,
      ]}
    >
      <Animated.Text style={[{ fontSize: 18, color: "#26292E" }, labelStyle]}>
        {label}
      </Animated.Text>
    </Animated.View>
  );
};
