import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Flex, Image, Text, VStack } from "native-base";
import { I18nManager, ImageSourcePropType, Platform, TouchableWithoutFeedback } from "react-native";
import { getLocales } from "expo-localization";

import i18n from "../i18/i18n";

const ChooseLanguage = () => {
  
  const [deviceLocale, setDeviceLocale] = useState({
    langCode: getLocales()[0].languageCode,
    isRTL: I18nManager.isRTL,
  });
  console.log("I18nManager.isRTL", I18nManager.isRTL)
  console.log("deviceLocale.isRTL: ", deviceLocale.isRTL)

  const languageItems = [
    { label: "دری", code: "fa", icon: require("../assets/img/afg.png"), isRTL: true },
    { label: "پشتو", code: "ps", icon: require("../assets/img/afg.png"), isRTL: true },
    { label: "English", code: "en", icon: require("../assets/img/usa.png"), isRTL: false },
  ];

  const languageBox = ({
    label,
    code,
    icon,
    key,
    isRTL = false,
  }: {
    label: string;
    code: string;
    icon: ImageSourcePropType;
    key: any;
    isRTL?: boolean;
  }) => {
    return (
      <TouchableWithoutFeedback
        key={key}
        onPress={() => {
          i18n.locale = code;
          I18nManager.allowRTL(isRTL);
          I18nManager.forceRTL(isRTL);
          setDeviceLocale({ langCode: code, isRTL });
        }}
      >
        <Flex
          bg={code === deviceLocale.langCode ? "primary.50" : "secondary.50"}
          p="2"
          my="2"
          shadow={code === deviceLocale.langCode ? "5" : "1"}
          flexDir={isRTL ? "row-reverse" : "row"}
          alignItems="center"
          borderRadius={"md"}
        >
          <Image source={icon} borderRadius="none" size="sm" alt="logo" />
          <Text fontSize={"xl"} px="5">
            {label}
          </Text>
        </Flex>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Box h="full" px="10" justifyContent={"center"}>
      <VStack px="5" >
        <Image
          w="220"
          h="220"
          alignSelf={"center"}
          borderRadius="md"
          alt="logo"
          source={require("../assets/img/logo.png")}
        />
        <Text fontSize={"xl"} textAlign="center" color={"primary.900"}>
          {i18n.t("Your slag here")}
        </Text>
        <Text fontSize={"xl"} my="2" textAlign="center" fontWeight={"bold"}>
          {i18n.t("Choose your prefred language")}
        </Text>
        {languageItems.map((i, k) => languageBox({ ...i, key: k }))}
        <Button size={"lg"} mt="3" shadow={"7"} colorScheme="primary">
          <Text fontSize={"lg"} color="white" fontWeight={"bold"}>
            {i18n.t("Continue")}
          </Text>
        </Button>
      </VStack>
    </Box>
  );
};

export default ChooseLanguage;
