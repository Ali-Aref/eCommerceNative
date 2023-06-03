import {
  Box,
  Button,
  FlatList,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from "native-base";
import React, {
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Animated,
  GestureResponderEvent,
  ImageSourcePropType,
  useWindowDimensions,
  View,
} from "react-native";
import Svg, { Circle, G } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../theme";

interface Slide {
  title: string;
  description: string;
  img: ImageSourcePropType;
  external?: ReactNode;
}

export default function OnBoarding() {
  const slideRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any[] }) => {
      setCurrentIndex(viewableItems[0].index);
    },
  ).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      // slideRef?.current.scrollToIndex({
      (slideRef as React.RefObject<any>)?.current.scrollToIndex({
        index: currentIndex + 1,
      });
      setCurrentIndex((old) => old + 1); // for after 5th slide
    } else {
      console.log("last slide!");
    }
  };

  const slides: Slide[] = [
    {
      title: "Welcome",
      description:
        "Welcome to the biggest E-Commerce application of Afghanistan.",
      img: require("../assets/img/boarding/undraw_Partying_re_at7f.png"),
    },
    {
      title: "Choose Product",
      description:
        "We have 100K+ Products. Choose your product from our E-Commerce shop.",
      img: require("../assets/img/boarding/undraw_shopping_app_flsj.png"),
    },
    {
      title: "Easy Payment",
      description:
        "Easy checkout and safe payment methods. Trusted by our customers from all over the world.",
      img: require("../assets/img/boarding/undraw_Credit_card_payment_re_o911.png"),
    },
    {
      title: "Fast Delivery",
      description: "Reliable And Fast Delivery. We Deliver your product the fastest way possible.",
      img: require("../assets/img/boarding/undraw_Deliveries_2r4y.png"),
    },
    {
      title: "Sell Items",
      description: "Sell items you don't need anymore and find seconded hand needed items.",
      img: require("../assets/img/boarding/undraw_Shopping_re_hdd9.png"),
    },
  ];

  return (
    <Box flex={1}>
      <Box flex={3}>
        <FlatList
          flex={3}
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
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          ref={slideRef}
        />
      </Box>
      <Box flex={1}>
        <OnBoardingFooter
          data={slides}
          scrollX={scrollX}
          scrollTo={scrollTo}
          percentage={(currentIndex + 1) * (100 / slides.length)}
        />
      </Box>
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
  const { width } = useWindowDimensions();

  return (
    <Flex w={width} alignItems={"center"}>
      <Image source={img} h="full" resizeMode="contain" alt="img" flex={4} />
      <Box alignItems={"center"} flex={1} px="10">
        <Text fontSize={"xl"} color={"primary.700"} fontWeight={"bold"}>
          {title}
        </Text>
        <Text fontSize={"md"} textAlign="center">
          {description}
        </Text>
      </Box>
    </Flex>
  );
}

export function OnBoardingFooter({
  data,
  scrollX,
  scrollTo,
  percentage,
}: {
  data: Slide[];
  scrollX: Animated.Value;
  scrollTo: any;
  percentage: number;
}) {
  const { width } = useWindowDimensions();

  const size = 110;
  const strokWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef: RefObject<any> | null = useRef(null);

  const animation = (toValue: any) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animation(percentage);

    progressAnimation.addListener((val) => {
      const strokeDashoffset = circumference -
        (circumference * val.value) / 100;
      if (progressRef?.current) {
        progressRef["current"].setNativeProps({
          strokeDashoffset: strokeDashoffset,
        });
      }
    });
  }, [percentage]);

  return (
    <Stack alignItems={"center"} space="xl">
      <Flex flexDir={"row"}>
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
                backgroundColor: colors.primary[900],
                marginHorizontal: 4,
                width: dotWidth,
              }}
            />
          );
        })}
      </Flex>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke={colors.primary[50]}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokWidth}
          />
          <Circle
            ref={progressRef}
            stroke={colors.primary[900]}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokWidth}
            strokeDasharray={circumference}
          // strokeDashoffset={circumference - (circumference * 25) / 100}
          />
        </G>
      </Svg>
      <IconButton
        top={"16"}
        bg={colors.primary[900]}
        position={"absolute"}
        borderRadius="full"
        icon={<Icon as={AntDesign} name="arrowright" color="white" />}
        _icon={{
          size: "4xl",
        }}
        onPress={scrollTo}
      />
    </Stack>
  );
}
