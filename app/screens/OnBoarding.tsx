import { Box, Text, Flex, FlatList, Image, Button } from "native-base";
import React, { useRef, useState } from "react";
import {
  ImageSourcePropType,
  useWindowDimensions,
  Animated,
  View,
} from "react-native";

interface Slide {
  title: string;
  description: string;
  img: ImageSourcePropType;
}

export default function OnBoarding() {
  const slideRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any[] }) => {
      setCurrentIndex(viewableItems[0].index);
    }
  ).current;

  const slides: Slide[] = [
    {
      title: "First Page",
      description: "The first page desc",
      img: require("../assets/img/boarding/i1.png"),
    },
    {
      title: "second page",
      description: "the second page desc",
      img: require("../assets/img/boarding/i2.png"),
    },
    {
      title: "thrid page",
      description: "the thrid page desc",
      img: require("../assets/img/boarding/i3.png"),
    },
    {
      title: "fourth page",
      description: "the fourth page desc",
      img: require("../assets/img/boarding/i4.png"),
    },
  ];

  return (
    <Box flex={1}>
      <FlatList
        data={slides}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <OnBoardingSlide
            title={item.title}
            description={item.description}
            img={item.img}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        ref={slideRef}
      />
      <OnBoardingFooter data={slides} scrollX={scrollX} />
    </Box>
  );
}

export function OnBoardingSlide({
  img,
  title,
  description,
}: {
  img: ImageSourcePropType;
  title: string;
  description: string;
}) {
  const { height, width } = useWindowDimensions();

  return (
    <Flex w={width} bg="white">
      <Image source={img} w="full" alt="img" flex={0.8} mb="3" />
      <Box flex={0.2} alignItems={"center"}>
        <Text fontSize={"lg"} color={"primary.700"} fontWeight={"bold"}>
          {title}
        </Text>
        <Text fontSize={"md"}>{description}</Text>
      </Box>
    </Flex>
  );
}

export function OnBoardingFooter({
  data,
  scrollX,
}: {
  data: Slide[];
  scrollX: Animated.Value;
}) {
  const { width } = useWindowDimensions();

  return (
    <Flex alignItems={"center"} flex={0.4} bg="white">
      <Flex flexDir={"row"} my="10">
        {data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={i.toString()}
              style={{
                height: 10,
                borderRadius: 5,
                backgroundColor: "black",
                marginHorizontal: 4,
                width: dotWidth,
              }}
            />
          );
        })}
      </Flex>
      <Button w="20" h="20" borderRadius={"full"}>
        Touchme
      </Button>
    </Flex>
  );
}
