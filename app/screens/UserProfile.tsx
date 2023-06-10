import { Feather } from "@expo/vector-icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
} from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import React, { useRef } from "react";
import UserPost from "../components/UserPost";
import { FlatList, ImageBackground } from "react-native";
import i18n from "../i18/i18n";
import { NavigationProp } from "@react-navigation/native";

const UserProfile = ({ navigation }: { navigation: NavigationProp<any> }) => {
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
    <FlatList
      data={[{ key: 1 }, { key: 2 }, { key: 3 }]}
      keyExtractor={(item) => item.key.toString()}
      ListHeaderComponent={Header}
      ListFooterComponent={<Box mt="20"></Box>}
      showsVerticalScrollIndicator={false}
      renderItem={() => <UserPost navigation={navigation} />}
    />
  );
};

export default UserProfile;
