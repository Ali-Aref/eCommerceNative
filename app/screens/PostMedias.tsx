import React from "react";
import { Box, Center, Flex, Pressable, Text } from "native-base";
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
import ZoomableImage from "../components/ZoomableImage";

const PostMedias = ({ route }: { route: RouteProp<any> }) => {
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
    <FlatList
      horizontal={true}
      pagingEnabled
      snapToAlignment="start"
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      data={[{ key: 1 }, { key: 2 }, { key: 3 }]}
      renderItem={(item) => (
        <Center>
          <Pressable onPress={() => {}}>
            <ZoomableImage src={route.params?.src} />
          </Pressable>
        </Center>
      )}
    />
  );
};

export default PostMedias;
