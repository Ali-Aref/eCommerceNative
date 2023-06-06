import { Flex, Image, Text, Box, Input, Button } from "native-base";
import i18n from "../i18/i18n";

const Login = () => {
	return (
			<Flex justifyContent={"space-evenly"} alignItems="center" flex={1}>
				<Image
					resizeMode="contain"
					w="200"
					h="200"
					source={require("../assets/img/logo2.png")}
				/>
				<Box padding={10} w="full">
					<Text fontSize={"lg"}>
						{i18n.t("Username")}
					</Text>
					<Input mt="2" fontSize={"lg"} w="full" />
					<Text fontSize={"lg"} mt="2">
						{i18n.t("Password")}
					</Text>
					<Input mt="2" fontSize={"lg"} w="full" type="password" />
					<Button mt="4" w="full" size={"lg"}>
						Login
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
