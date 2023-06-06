import { Box, Flex, HStack, Image, Text } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import i18n from "../i18/i18n";
import { useLocale } from "../store/useLocale";

export const LanguageSilde = (props: {}) => {
  const { languageCode, setLanguageCode, isRtl, setIsRtl } = useLocale();

  const { width } = useWindowDimensions();
  const languageItems = [
    {
      label: "English",
      code: "en",
      icon: require("../assets/img/united-kingdom.png"),
      isRTL: false,
    },
    {
      label: "پشتو",
      code: "ps",
      icon: require("../assets/img/afghanistan.png"),
      isRTL: true,
    },
    {
      label: "دری",
      code: "fa",
      icon: require("../assets/img/afghanistan.png"),
      isRTL: true,
    },
  ];

  return (
    <Flex w={width} alignItems={"center"} justifyItems="center">
      <Image
        source={require(
          "../assets/img/boarding/undraw_Around_the_world_re_rb1p.png",
        )}
        h="full"
        resizeMode="contain"
        alt="img"
        flex={4}
      />
      <Box alignItems={"center"} flex={1} px="10">
        <Text fontSize={"xl"} color={"primary.700"} fontWeight={"bold"}>
          {i18n.t("Choose Your Language")}
        </Text>
        <HStack mb="5">
          {languageItems.map((lng) => (
            <TouchableOpacity
              key={`lng-${lng.code}`}
              onPress={() => {
                setIsRtl(lng.isRTL);
                setLanguageCode(lng.code);
              }}
            >
              <Flex p="2" alignItems="center">
                <Image
                  source={lng.icon}
                  borderRadius="none"
                  size={lng.code === languageCode ? "sm" : "xs"}
                  alt="logo"
                />
                <Text fontSize={lng.code === languageCode ? "xl" : "lg"}>
                  {lng.label}
                </Text>
              </Flex>
            </TouchableOpacity>
          ))}
        </HStack>
      </Box>
    </Flex>
  );
};
