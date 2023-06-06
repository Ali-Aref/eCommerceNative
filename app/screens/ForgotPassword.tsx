import { Flex, Image, Text, Box, Input, Button } from "native-base";
import i18n from "../i18/i18n";

const FindAccount = () => {
	return (
		<Flex px={10} justifyContent={"space-evenly"} alignItems="center" flex={1}>
			<Image
				resizeMode="contain"
				w="200"
				h="200"
				source={require("../assets/img/logo2.png")}
			/>
			<Box w="full" alignItems="center">
				<Text alignSelf={"start"} fontSize={"lg"}>
					{i18n.t("Username or Email")}
				</Text>
				<Input fontSize={"lg"} w="full" />
				<Button mt="4" w="full" size={"lg"}>
					{i18n.t("Find Account")}
				</Button>
			</Box>
			<Box w="full" alignItems="center">
				<Button size={"lg"} variant="ghost" w="full">
					{i18n.t("Login")}
				</Button>
			</Box>
		</Flex>
	);
};

const ForgotPassword = () => {
	return (
		<Flex justifyContent={"space-evenly"} alignItems="center" flex={1}>
			<Image
				resizeMode="contain"
				w="200"
				h="200"
				source={require("../assets/img/logo2.png")}
			/>
			<Box padding={10} w="full" >
				<Text fontSize={"lg"}>
					{i18n.t("Username or Email")}
				</Text>
				<Input fontSize={"lg"} mt="1" w="full" />
				<Button mt="4" w="full" size={"lg"}>
					{i18n.t("Find Account")}
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

export default ForgotPassword;
export { FindAccount };