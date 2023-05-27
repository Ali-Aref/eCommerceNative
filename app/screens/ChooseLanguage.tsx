import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Flex, Text, VStack } from "native-base";
import { TouchableWithoutFeedback, I18nManager, } from "react-native";
import { getLocales } from "expo-localization";

import i18n from "../i18/i18n";

const ChooseLanguage = (props: {}) => {
  const [deviceLocale, setDeviceLocale] = useState({
    lang: getLocales()[0].languageCode,
    dir: I18nManager.isRTL ? "rtl": "ltr",
  });

  const languageItems = [
    { label: "دری", code: "fa", icon: "", rtl: true },
    { label: "پشتو", code: "ps", icon: "", rtl: true },
    { label: "English", code: "en", icon: "" },
  ];

  const languageBox = ({
    label,
    code,
    icon,
    key,
    rtl = false,
  }: {
    label: string;
    code: string;
    icon: string;
    key: any;
    rtl?: boolean;
  }) => {
    return (
      <TouchableWithoutFeedback
        key={key}
        onPress={() =>{ 
          i18n.locale = code;
          I18nManager.allowRTL(rtl)
          I18nManager.forceRTL(rtl)
          setDeviceLocale({ lang: code, dir: "ltr" })
        }} 
      >
        <Flex
          bg={code === deviceLocale.lang ? "primary.50" : "secondary.50"}
          p="5"
          my="2"
          shadow={code === deviceLocale.lang ? "2": "7"}
          flexDir={rtl ? "row-reverse" : "row"}
          alignItems="center"
          borderRadius={"md"}
        >
          <Avatar
            bg="gray.900"
            source={{
              uri:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          />
          <Text fontSize={"xl"} px="5">
            {label}
          </Text>
        </Flex>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Box h="full" p="10" justifyContent={"center"}>
      <VStack px="5">
        {languageItems.map((i, k) => languageBox({ ...i, key: k }))}
        <Button size={"lg"} mt="3" shadow={"7"} colorScheme="primary">
          <Text fontSize={"lg"} color="white">
            {i18n.t("continue")}
          </Text>
        </Button>
        <Text>{deviceLocale.lang}</Text>
        <Text>{getLocales()[0].languageCode}</Text>
        <Text>is RTL: {String(I18nManager.isRTL)}</Text>
        
      </VStack>
    </Box>
  );
};

export default ChooseLanguage;
