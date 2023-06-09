import { Feather } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, HStack, Icon, IconButton, Menu, Pressable } from "native-base";
import React from "react";
import PostMedias from "../screens/PostMedias";
import PostDetails from "../screens/PostDetails";
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
        name="PostDetails"
        component={PostDetails}
        options={{
          title: "Details",
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name="PostMedias"
        component={PostMedias}
        options={({ route }) => ({
          title: "",
          headerRight(props) {
            // get img src: route.params?.src
            return (
              <HStack position={"absolute"} right="5" bottom="3" space={2}>
                <IconButton
                  variant={"outline"}
                  borderRadius="full"
                  icon={
                    <Icon as={<Feather name="download-cloud" />} size="sm" />
                  }
                />

                <Menu
                  trigger={(triggerProps) => {
                    return (
                      <IconButton
                        accessibilityLabel="More options menu"
                        {...triggerProps}
                        variant={"outline"}
                        borderRadius="full"
                        icon={
                          <Icon
                            as={<Feather name="more-horizontal" />}
                            size="sm"
                          />
                        }
                      />
                    );
                  }}
                >
                  <Menu.Item isDisabled>Edit</Menu.Item>
                  <Menu.Item>Share</Menu.Item>
                  <Menu.Item>Report</Menu.Item>
                </Menu>
              </HStack>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};
