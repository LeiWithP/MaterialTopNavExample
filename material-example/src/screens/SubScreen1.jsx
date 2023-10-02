import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SubScreen1 = ({ route }) => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");

  return (
    <ImageBackground
      source={{ uri: `https://picsum.photos/${width}/${height}` }}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      blurRadius={1}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Fuck you</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});

export default SubScreen1;
