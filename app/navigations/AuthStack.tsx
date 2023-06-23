import { createStackNavigator } from "@react-navigation/stack";
import { Box, Image, Text } from "native-base";
import ForgotPassword from "../screens/ForgotPassword";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import VerificationCode from "../screens/VerficationCode";
import HomeTabs from "./HomeTabs";
import { ProfileStack } from "./ProfileStack";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header(props) {
          return (
            <Box w="full" alignItems="center">
              <Image
                mt="24"
                w="150"
                h="150"
                alt="logo"
                resizeMode="contain"
                source={require("../assets/logo1.png")}
              />
            </Box>
          );
        },
        cardStyle: {
          backgroundColor: "white",
        },
        // presentation: "card",
        presentation: "transparentModal",
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
