// StyleSheet: allows us to create styles to use in our views
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, View } from "react-native";

import { useState } from "react";

import * as ImagePicker from "expo-image-picker";

// Importing local assets
const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1 /* .1 low quality */,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <View
      style={styles.container}
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage || PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <Button label="Use this photo" />
      </View>
      {/* <Text style={styles.text}>Hello Expo.</Text> */}
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
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
