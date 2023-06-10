import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import UserPostDetails from "../components/UserPostDetails";

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="userPostDetails"
        component={UserPostDetails}
        options={{
          title: "Post Details",
        }}
      />
    </Stack.Navigator>
  );
};
