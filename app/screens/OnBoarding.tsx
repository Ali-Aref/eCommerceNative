import { Box, Button, Text, Flex } from 'native-base';
import React, { useRef, RefObject } from 'react'

export default function OnBoarding() {
  const pagerRef: RefObject<{ setPage: (pageNumber: number) => void }> | null = useRef(null);

  const handlePageChange = (pageNumber: number) => {
    pagerRef?.current?.setPage(pageNumber);
  };

  return (
    <Box flex={1} py="2">
        <OnBoardingPage backgroundColor="lightgreen" title="GREEN PAGE" iconName="testicon" key={"1"}/>
        <OnBoardingPage backgroundColor="lightblue" title="BLUE PAGE" iconName="testicon" key={"2"}/>
        <OnBoardingFooter />
    </Box>
  )
}

export function OnBoardingPage({ backgroundColor, iconName, title }:{
    backgroundColor: string;
    iconName: string;
    title: string;
}) {
    return <Box alignItems={"center"} justifyContent={"center"} bg={backgroundColor} flex={1}>
        <Text>Here is the page</Text>
    </Box>

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