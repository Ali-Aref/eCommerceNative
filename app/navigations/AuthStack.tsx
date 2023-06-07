import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../../theme";
import ForgotPassword from "../screens/ForgotPassword";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import VerificationCode from "../screens/VerficationCode";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "white",
        },
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
