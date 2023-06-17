import { I18nManager, Platform, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Box, Text, Flex } from 'native-base';

// import * as Updates from 'expo-updates';

export default function CC() {
  const shouldBeRTL = true;

  if (shouldBeRTL !== I18nManager.isRTL && Platform.OS !== 'web') {
    I18nManager.allowRTL(shouldBeRTL);
    I18nManager.forceRTL(shouldBeRTL);
    // Updates.reloadAsync();
  }

  return (
    <Flex bg="blue.200" h="full" alignItems={"flex-start"}>
      <Text fontSize={"2xl"} >isRTL: {String(I18nManager.isRTL)}</Text>
      <Text fontSize={"2xl"} >{I18nManager.isRTL ? ' RTL' : ' LTR'}</Text>
    </Flex>
  );
}


const styles = StyleSheet.create({
  paragraph: {
    // textAlign: 'left',
  },
});

const re = <VStack mt="3" px="3">
        <Box borderWidth={1} borderColor={"gray.300"} borderRadius="md">
          <VStack divider={<Divider />}>
            <Box p="4">
              <Flex
                justifyContent={"space-between"}
                flexDir="row"
                alignItems={"center"}
              >
                <Text fontSize={"xl"}>Iron 34$</Text>
                <Text fontSize={"lg"}>5 days ago</Text>
              </Flex>
            </Box>
            <Box p="4">
              <Image
                source={require("../assets/temp/post2.png")}
                borderRadius="md"
                h="250"
                p="5"
                alt="img"
              />
            </Box>
            <Flex
              justifyContent={"space-between"}
              flexDir="row"
              px="4"
              shadow={"1"}
            >
              <Flex flexDir={"row"} alignItems="center">
                <IconButton
                  borderRadius="full"
                  colorScheme={"red"}
                  icon={<Icon as={<Feather name="heart" />} size="lg" />}
                />
                <Text fontSize={"md"}>22</Text>
              </Flex>
              <HStack space={0} alignItems={"center"}>
                <Icon as={<Feather name="chevron-left" />} size="sm" />
                <Icon as={<Feather name="chevron-right" />} size="sm" />
              </HStack>
              <HStack space={2}>
                <Flex flexDir={"row"} alignItems="center">
                  <IconButton
                    borderRadius="full"
                    colorScheme={"red"}
                    icon={
                      <Icon as={<Feather name="message-square" />} size="lg" />
                    }
                  />
                  <Text fontSize={"md"}>22</Text>
                </Flex>
              </HStack>
            </Flex>
          </VStack>
        </Box>
      </VStack>
