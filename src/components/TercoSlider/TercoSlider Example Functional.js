import * as React from "react";
import { View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

const PAGE_WIDTH = 60;
const PAGE_HEIGHT = 40;
const DATA = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];

function Index() {
  const r = React.useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginVertical: 100 }}>
        <Carousel
          ref={r}
          loop={false}
          style={{
            width: 700,
            height: PAGE_HEIGHT,
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#0071fa",
          }}
          width={PAGE_WIDTH}
          height={PAGE_HEIGHT}
          data={DATA}
          renderItem={({ item, animationValue }) => {
            return <Item animationValue={animationValue} label={item} />;
          }}
        />
      </View>
    </View>
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
