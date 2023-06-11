import React from "react";
import { Box } from "native-base";
import { Animated, useWindowDimensions } from "react-native";
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  State,
} from "react-native-gesture-handler";

const ImageCloseup = () => {
  const { width } = useWindowDimensions();
  const scale = new Animated.Value(1);

  const gestureEvent = Animated.event([{ nativeEvent: { scale: scale } }], {
    useNativeDriver: true,
  });
  const pinchStateChanged = (e: any) => {
    if (e.nativeEvent.oldState === State.ACTIVE){
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start()
    }
  }

  return (
    <Box flex="1" justifyContent={"center"} alignItems="center">
      <GestureHandlerRootView>
        <PinchGestureHandler onGestureEvent={gestureEvent}
        onHandlerStateChange={pinchStateChanged}>
          <Animated.Image
            source={require("../assets/temp/profile2.jpg")}
            style={{ width: width, transform: [{ scale }] }}
            resizeMode="contain"
            alt="img"
          />
        </PinchGestureHandler>
      </GestureHandlerRootView>
    </Box>
  );
};

export default ImageCloseup;
