import { AntDesign, Feather } from "@expo/vector-icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import React from "react";
import { UserNewPost } from "../components/UserNewPost";
import { FlatList, ImageBackground, SafeAreaView, useWindowDimensions } from "react-native";
import i18n from "../i18/i18n";
import { Circle } from "react-native-svg";

const UserProfile = (props: {}) => {
  const Header = (
    <Stack flex="1" alignItems={"center"}>
      <Box h="250" w="full" marginBottom={"50"}>
        <ImageBackground
          alt="cover"
          style={{ flex: 1 }}
          source={require("../assets/temp/cover2.png")}
        >
          <Image
            source={require("../assets/temp/profile2.jpg")}
            h="140"
            w="140"
            bottom="-50"
            borderWidth="6"
            borderColor="white"
            borderRadius="full"
            position={"absolute"}
            alignSelf={"center"}
            alt="profile"
            bgColor={"primary.300"}
          />
          <IconButton
            position={"absolute"}
            right="5"
            bottom="3"
            variant={"outline"}
            borderColor="white"
            borderRadius="full"
            icon={
              <Icon as={<Feather name="camera" />} size="sm" color={"white"} />
            }
          />
        </ImageBackground>
      </Box>
      <Box px="10" alignItems={"center"} mt="2">
        <Text fontSize={"2xl"} fontWeight="bold">
          Ali Aref
        </Text>
        <Text textAlign={"center"} fontSize="md">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </Text>
        <HStack mt="5" space={2}>
          <Button
            leftIcon={<Icon as={<Feather name="user" />} />}
            colorScheme={"primary"}
            flex="1"
          >
            {i18n.t("Edit Profile")}
          </Button>
          <IconButton
            variant="solid"
            px="3"
            colorScheme={"teal"}
            icon={<Icon as={<Feather name="activity" />} size="sm" />}
          />
          <IconButton
            px="3"
            variant="solid"
            colorScheme={"cyan"}
            icon={<Icon as={<Feather name="heart" />} size="sm" />}
          />
          <IconButton
            px="3"
            variant="solid"
            colorScheme={"secondary"}
            icon={<Icon as={<Feather name="shopping-cart" />} size="sm" />}
          />
        </HStack>
      </Box>
    </Stack>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={[{ key: 1 }, { key: 2 }, { key: 3 }]}
        keyExtractor={(item) => item.key.toString()}
        ListHeaderComponent={Header}
        ListFooterComponent={<Box mt="20"></Box>}
        showsVerticalScrollIndicator={false}
        renderItem={() => <PostItem />}
      />
    </SafeAreaView>
  );
};

export default UserProfile;

const PostItem = (props: any) => {
  const { width } = useWindowDimensions()
  console.log("width: ", width)
  return (
    <Box bg="white" shadow={7} rounded="md" mx={"3"} mt="4">
      <FlatList
        horizontal={true}
        snapToInterval={width} 
        data={[{ key: 1 }, { key: 2 }]}
        renderItem={(item) => (
          <Image
            source={require("../assets/temp/post2.png")}
            h="250"
            alt="post-img"
            borderTopRadius={"md"}
          />
        )}
      />
      <Box p={4}>
        <Flex
          flexDir={"row"}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack mt={2}>
            <Icon
              as={AntDesign}
              name="heart"
              size={5}
              color={Math.round(Math.random() * 10) % 2 === 0
                ? "red.600"
                : "gray.300"}
            />
            <Text ml={1} fontSize="sm" color="gray.500">
              5 likes
            </Text>
          </HStack>
          <HStack space={0.5}>
            <Box h="2" w="2" bg="primary.600" borderRadius={"full"} />
            <Box h="2" w="2" bg="gray.400" borderRadius={"full"} />
          </HStack>
          <Text fontSize="sm" color="gray.500" mt={2}>
            3 comments
          </Text>
        </Flex>
        <Text fontSize="sm" color="gray.500" mt={2}>
          3 days ago
        </Text>
        <HStack space={2} alignItems={"center"} mt={4}>
          <Text fontSize="lg" fontWeight="bold">
            Post Title
          </Text>
          <Text fontWeight="semibold" color="gray.500">
            250 AF
          </Text>
        </HStack>
        <Text fontSize="md" mt={2} numberOfLines={2}>
          This is the post description. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Text>
      </Box>
    </Box>
  );
};
