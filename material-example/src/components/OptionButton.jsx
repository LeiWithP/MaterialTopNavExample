import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ActiveButton from "./ActiveButton";

const OptionButton = ({ text, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {/* <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity> */}
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
//   button: {
//     backgroundColor: "cyan",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 5,
//     width: 80,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
});

export default OptionButton;
