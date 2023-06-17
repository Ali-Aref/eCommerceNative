import React from "react";
import { Box, Flex, Text } from "native-base";
import {
  Animated,
  ImageSourcePropType,
  ImageStyle,
  useWindowDimensions,
} from "react-native";
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  State,
} from "react-native-gesture-handler";

const ZoomableImage = ({
  src,
  style,
}: {
  src: ImageSourcePropType;
  style?: ImageStyle;
}) => {
  const { width } = useWindowDimensions();
  const scale = new Animated.Value(1);

  const gestureEvent = Animated.event([{ nativeEvent: { scale: scale } }], {
    useNativeDriver: true,
  });
  const pinchStateChanged = (e: any) => {
    if (e.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Box>
      <GestureHandlerRootView>
        <PinchGestureHandler
          onGestureEvent={gestureEvent}
          onHandlerStateChange={pinchStateChanged}
        >
          <Animated.Image
            source={src}
            style={{
              transform: [{ scale }],
              width: width,
              height: 250,
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
              ...style,
            }}
            alt="img"
          />
        </PinchGestureHandler>
      </GestureHandlerRootView>
    </Box>
  );
};
export default ZoomableImage;

