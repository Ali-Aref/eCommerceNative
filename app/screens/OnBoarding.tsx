import { Box, Button, Text, Flex , FlatList, Image, Stack } from 'native-base';
import React, { useRef, RefObject } from 'react'
import { ImageSourcePropType, useWindowDimensions } from 'react-native';
import ChooseLanguage from './ChooseLanguage';

interface Slide {
    title: string;
    description: string;
    img: ImageSourcePropType;
}

export default function OnBoarding() {
  const slides: Slide[]  = [                
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
    ]

  return (
    <Box flex={1}>
        <FlatList 
            data={slides} 
            keyExtractor={(item)=> item.title}
            renderItem={(({ item })=>(
                <OnBoardingSlide  title={item.title} description={item.description} img={item.img} />
            ))} 
            horizontal
            showsHorizontalScrollIndicator
            bounces={false}
        />
        <OnBoardingFooter />
    </Box>
  )
}

export function OnBoardingSlide({ backgroundColor="white", img, title, description }:{
    backgroundColor?: string;
    img: ImageSourcePropType;
    title: string;
    description: string;
}) {
    const { height, width } = useWindowDimensions()

    return <Flex alignItems={"center"}  bg={backgroundColor} w={width} >
        <Image source={img} w="full" resizeMode="contain"  flex={0.6} alt="img" />
        <Text fontSize={"lg"} color={'primary.700'} fontWeight={"bold"}>{title}</Text>
        <Text fontSize={"md"}>{description}</Text>
    </Flex>

}

export function OnBoardingFooter({}){
    const boardBtn = (label: string) => {
        return <Button>{label}</Button>
    }
    return <Flex flexDir={"row"} justifyContent={"center"} my="4">
        {boardBtn("one")}
        {boardBtn("two")}
    </Flex>

}