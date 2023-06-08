import { Box, Button, Flex, Image, Input, Text } from "native-base";
import i18n from "../i18/i18n";
import { NavigationProp } from "@react-navigation/native";

const ForgotPassword = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  return (
    <Flex justifyContent={"space-evenly"} alignItems="center" flex={1}>
      <Box padding={10} w="full">
        <Text fontSize={"lg"}>{i18n.t("Email")}</Text>
        <Input fontSize={"lg"} mt="1" w="full" />
        <Button mt="4" w="full" size={"lg"}>
          {i18n.t("Send Reset Link")}
        </Button>
      </Box>
      <Box px={10} w="full" alignItems="center">
        <Button
          w="full"
          size={"lg"}
          variant="ghost"
          onPress={() => navigation.navigate("Login")}
        >
          {i18n.t("Login")}
        </Button>
      </Box>
    </Flex>
  );
};

export default ForgotPassword;
