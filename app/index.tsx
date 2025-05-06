import { StyleSheet, Text, View } from "react-native";

// StyleSheet: allows us to create styles to use in our views

export default function Index() {
  return (
    <View
      style={styles.container}
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <Text style={styles.text}>Hello Expo.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#454545",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
