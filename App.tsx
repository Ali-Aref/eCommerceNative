import React, { useEffect } from "react";
import { I18nManager, Platform, SafeAreaView, StyleSheet } from "react-native";
import { NativeBaseProvider, StatusBar } from "native-base";
import theme from "./theme";

import Login from "./app/screens/Login";
import AppBar from "./app/components/Appbar";
import ChooseLanguage from "./app/screens/ChooseLanguage";
import CC from "./app/screens/cc";
import OnBoarding from "./app/screens/OnBoarding";
import i18n from "./app/i18/i18n";
import { useLocale } from "./app/store/useLocale";
import ForgotPassword from "./app/screens/ForgotPassword";
import VerificationCode from "./app/screens/VerficationCode";
import ResetPassword from "./app/screens/ResetPassword";
import RegisterUser from "./app/screens/RegisterUser";

export default function App() {
  // const { languageCode, isRtl } = useLocale();

  // useEffect(() => {
  //   i18n.locale = languageCode;
  //   I18nManager.allowRTL(isRtl);
  //   I18nManager.forceRTL(isRtl);
  // }, [languageCode]);

  return (
    <NativeBaseProvider theme={theme}>
      {/*<OnBoarding />*/}
      {
        /*
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" />
      </SafeAreaView>
      */
      }
      <RegisterUser />
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
