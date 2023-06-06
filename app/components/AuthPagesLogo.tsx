import { Image } from "native-base";
import React from "react";

export const AuthPagesLogo = () => {
  return (
    <Image
      w="200"
      h="200"
      alt="logo"
      resizeMode="contain"
      source={require("../assets/img/logo2.png")}
    />
  );
};
