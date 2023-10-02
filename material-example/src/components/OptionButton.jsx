import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ActiveButton from "./ActiveButton";

const OptionButton = ({ text, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <ActiveButton onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: 340,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default OptionButton;
