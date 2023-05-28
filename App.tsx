import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import {
  NativeBaseProvider,
  StatusBar,
} from "native-base";
import { en, fa, ps } from "./app/i18/en"

import Login from "./app/screens/Login";
import AppBar from "./app/components/Appbar";
import ChooseLanguage from "./app/screens/ChooseLanguage";
import CC from "./app/screens/cc";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" />
        <ChooseLanguage />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
