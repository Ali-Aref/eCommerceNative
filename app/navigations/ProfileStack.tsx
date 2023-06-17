import { Feather } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Icon, IconButton } from "native-base";
import React from "react";
import ImageCloseup from "../components/ImageCloseup";
import UserPostDetails from "../components/UserPostDetails";
import UserProfile from "../screens/UserProfile";

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserPostDetails"
        component={UserPostDetails}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ImageCloseUp"
        component={ImageCloseup}
        options={({ route }) => ({
          title: "",
          headerRight(props) {
            // get img src: route.params?.src
          return <IconButton
            position={"absolute"}
            right="5"
            bottom="3"
            variant={"outline"}
            borderRadius="full"
            icon={
              <Icon as={<Feather name="download-cloud" />} size="sm" />
            }
          />
            
          },
        })}
      />
    </Stack.Navigator>
  );
};
