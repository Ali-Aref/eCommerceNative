import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Input,
  Pressable,
  Text,
} from "native-base";
import { useState } from "react";
import i18n from "../i18/i18n";
import { Feather } from "@expo/vector-icons";

const Login = () => {
  const [showpassword, setshowpassword] = useState(false);

  return (
    <Flex justifyContent={"space-evenly"} alignItems="center" flex={1}>
      <Image
        resizeMode="contain"
        w="200"
        h="200"
        source={require("../assets/img/logo2.png")}
        alt="logo"
      />
      <Box padding={10} w="full">
        <Text fontSize={"lg"}>{i18n.t("Username")}</Text>
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
            <Pressable onPress={()=> setshowpassword(!showpassword)}>
              <Icon
                size={"lg"}
                right="2"
                as={<Feather name={showpassword ? "eye-off" : "eye"} />}
              />
            </Pressable>
          }
        />
        <Button mt="4" w="full" size={"lg"}>
          {i18n.t("Login")}
        </Button>
      </Box>
      <Box px={10} w="full" alignItems="center">
        <Button size={"lg"} variant="ghost" w="full">
          {i18n.t("Create New Account")}
        </Button>
      </Box>
    </Flex>
  );
};

export default Login;
