import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const Screen1 = ({ route }) => {
  const navigation = useNavigation();

  const navigateToSubScreen2 = () => {
    navigation.navigate("SubTab2");
  };

  const { texto } = route.params;

  return (
    <ImageBackground
      source={{
        uri: "https://static.vecteezy.com/system/resources/previews/002/048/142/original/abstract-minimal-geometric-pattern-design-of-black-and-green-decorative-design-background-illustration-vector.jpg",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.rectangle}>
          <Text style={styles.title}>Screen 1</Text>
          <Text style={{ fontSize: 12, marginTop: 10, color: "black" }}>
            {texto}
          </Text>
        </View>

        <Button
          title="Go to SubScreen2"
          onPress={navigateToSubScreen2}
          color="red"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "repeat",
  },
  rectangle: {
    margin: 10,
    width: 200,
    height: 100,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});

export default Screen1;
