import { Feather } from "@expo/vector-icons";
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
import { ImageBackground } from "react-native";

const UserProfile = (props: {}) => {
  return (
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
        <HStack mt="5" space={2} display="none">
          <Button leftIcon={<Icon as={<Feather name="plus" />} />} flex="1">
            New Post
          </Button>
          <Button
            leftIcon={<Icon as={<Feather name="user" />} />}
            colorScheme="secondary"
            flex="1"
          >
            Edit Profile
          </Button>
          <Button
            leftIcon={<Icon as={<Feather name="settings" />} />}
            colorScheme="secondary"
          >
          </Button>
        </HStack>
      </Box>
    </Stack>
  );
};

export default UserProfile;


const PostItem = () => {
}
