import React from "react";
import { Box, Pressable, Text } from "native-base";
import {
  Animated,
  FlatList,
  ImageSourcePropType,
  useWindowDimensions,
} from "react-native";
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  State,
} from "react-native-gesture-handler";
import { RouteProp } from "@react-navigation/native";

const ImageCloseup = ({ route }: { route: RouteProp<any> }) => {
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
    <Box flex="1" justifyContent={"center"} alignItems="center">
      <GestureHandlerRootView>
        <PinchGestureHandler
          onGestureEvent={gestureEvent}
          onHandlerStateChange={pinchStateChanged}
        >
      <FlatList
        horizontal={true}
        pagingEnabled
        snapToAlignment="start"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        data={[{ key: 1 }, { key: 2 }, { key: 3 }]}
        renderItem={(item) => (
          <Pressable
            onPress={() =>{}}
          >
              <Animated.Image
                // source={require("../assets/temp/profile2.jpg")}
                source={route.params?.src}
                style={{ width: width, transform: [{ scale }] }}
                resizeMode="contain"
                alt="img"
              />
                
          </Pressable>
        )}
      />
          
        </PinchGestureHandler>
      </GestureHandlerRootView>
    </Box>
  );
};

export default ImageCloseup;
