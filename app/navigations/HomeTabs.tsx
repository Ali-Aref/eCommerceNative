import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Newsfeed from "../screens/Newsfeed";
import { Box, Icon, Pressable, Text } from "native-base";
import { Feather } from "@expo/vector-icons";
import UserProfile from "../screens/UserProfile";
import Business from "../screens/Business";
import UserNewPost from "../screens/UserNewPost";
import { StyleSheet } from "react-native";
import { colors } from "../../theme";
import { ProfileStack } from "./ProfileStack";

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Newsfeed"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: style.homeTabsStyle,
        tabBarIcon: ({ color, size, focused }) => {
          const mapIcons: Record<string, any> = {
            Home: "home",
            Business: "grid",
            UserNewPost: "plus-square",
            Videos: "box",
            ProfileStack: "user",
          };
          return (
            <Icon
              color={color}
              size={size}
              as={<Feather name={mapIcons[route.name]} />}
            />
          );
        },
        // tabBarActiveTintColor: colors.primary[700],
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray.500",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Videos"
        component={Home}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Business"
        component={Business}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="UserNewPost"
        component={UserNewPost}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

const CustomTabBarButton = (props: any) => {
  const { children, accessibilityState, onPress } = props;
  return accessibilityState.selected
    ? (
      <Box flex={1} alignItems={"center"}>
        <Pressable
          w="55"
          h="55"
          bg="primary.600"
          shadow={"6"}
          onPress={onPress}
          borderRadius="full"
          top="-15"
        >
          {children}
        </Pressable>
      </Box>
    )
    : (
      <Pressable flex={1} onPress={onPress}>
        {children}
      </Pressable>
    );
};

const style = StyleSheet.create({
  homeTabsStyle: {
    position: "absolute",
    borderRadius: 20,
    // borderTopWidth: 0,
    // borderWidth: 2,
    shadowColor: colors.primary[900],
    bottom: 10,
    right: 10,
    left: 10,
  },
});
