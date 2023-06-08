import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Newsfeed from "../screens/Newsfeed";

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="Newsfeed" screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Newsfeed" component={Newsfeed} />
    </Tab.Navigator>
  );
}
