import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Input,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import { useState } from "react";
import i18n from "../i18/i18n";
import { Feather } from "@expo/vector-icons";
import { AuthPagesLogo } from "../components/AuthPagesLogo";
import { NavigationProp } from "@react-navigation/native";

const SignUp = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [showpassword, setshowpassword] = useState(false);

  return (
    <Flex flex="1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Flex flex={1} justifyContent={"space-evenly"} alignItems="center">
          <AuthPagesLogo />
          <Box padding={10} w="full">
            <Text fontSize={"lg"}>{i18n.t("Username")}</Text>
            <Input mt="2" fontSize={"lg"} w="full" />
            <Text mt="2" fontSize={"lg"}>
              {i18n.t("Name")}
            </Text>
            <Input mt="2" fontSize={"lg"} w="full" />
            <Text fontSize={"lg"} mt="2">
              {i18n.t("Password")}
            </Text>
            <Input
              mt="2"
              w="full"
              fontSize={"lg"}
              type={showpassword ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setshowpassword(!showpassword)}>
                  <Icon
                    size={"lg"}
                    right="2"
                    as={<Feather name={showpassword ? "eye-off" : "eye"} />}
                  />
                </Pressable>
              }
            />
            <Button mt="4" w="full" size={"lg"}>
              {i18n.t("Create")}
            </Button>
          </Box>
          <Box px={10} w="full" alignItems="center">
            <Button
              size={"lg"}
              w="full"
              variant="ghost"
              onPress={() => navigation.navigate("Login")}
            >
              {i18n.t("Login")}
            </Button>
          </Box>
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default SignUp;
