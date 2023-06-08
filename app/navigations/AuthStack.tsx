import { createStackNavigator } from "@react-navigation/stack";
import { Box, Image } from "native-base";
import { useWindowDimensions } from "react-native";
import ForgotPassword from "../screens/ForgotPassword";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import VerificationCode from "../screens/VerficationCode";
import HomeTabs from "./HomeTabs";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header(props) {
          return (
            <Box w="full" alignItems="center">
              <Image
                mt="20"
                w="200"
                h="200"
                alt="logo"
                resizeMode="contain"
                source={require("../assets/img/logo2.png")}
              />
            </Box>
          );
        },
        cardStyle: {
          backgroundColor: "white",
        },
        presentation:"card",
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
