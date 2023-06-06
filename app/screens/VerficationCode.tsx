import { Box, Button, Flex, Image, Input, Text } from "native-base";
import i18n from "../i18/i18n";

const VerificationCode = () => {
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
        <Text fontSize={"lg"}>{i18n.t("Verification Code")}</Text>
        <Input fontSize={"lg"} mt="1" w="full" keyboardType="number-pad" />
        <Button mt="4" w="full" size={"lg"}>
          {i18n.t("Verify")}
        </Button>
      </Box>
      <Box px={10} w="full" alignItems="center">
        <Button size={"lg"} variant="ghost" w="full">
          {i18n.t("Login")}
        </Button>
      </Box>
    </Flex>
  );
};

export default VerificationCode;
