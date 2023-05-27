import { Text, View, StyleSheet, I18nManager, Platform } from 'react-native';
import Constants from 'expo-constants';

// import * as Updates from 'expo-updates';

export default function CC() {
  const shouldBeRTL = true;

  if (shouldBeRTL !== I18nManager.isRTL && Platform.OS !== 'web') {
    I18nManager.allowRTL(shouldBeRTL);
    I18nManager.forceRTL(shouldBeRTL);
    // Updates.reloadAsync();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{I18nManager.isRTL ? ' RTL' : ' LTR'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '60%',
    backgroundColor: 'pink',
  },
});
