import { SafeAreaView, Image, StyleSheet, Text, View, Button, Alert, Platform, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      </View>
      <Button title='Tap me' onPress={()=>Alert.alert("Good Morning!", "How do you feel today?", [
        { text: "Cancel",  },
        { text: "Prefom",  },
      ])} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flex: 1,
    height: undefined,
    width: "100%",
    aspectRatio: 1,
  }
});
