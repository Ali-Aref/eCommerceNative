import { I18nManager, Platform, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Box, Text, Flex } from 'native-base';

// import * as Updates from 'expo-updates';

export default function CC() {
  const shouldBeRTL = true;

  if (shouldBeRTL !== I18nManager.isRTL && Platform.OS !== 'web') {
    I18nManager.allowRTL(shouldBeRTL);
    I18nManager.forceRTL(shouldBeRTL);
    // Updates.reloadAsync();
  }

  return (
    <Flex bg="blue.200" h="full" alignItems={"flex-start"}>
      <Text fontSize={"2xl"} >isRTL: {String(I18nManager.isRTL)}</Text>
      <Text fontSize={"2xl"} >{I18nManager.isRTL ? ' RTL' : ' LTR'}</Text>
    </Flex>
  );
}


const styles = StyleSheet.create({
  paragraph: {
    // textAlign: 'left',
  },
});
