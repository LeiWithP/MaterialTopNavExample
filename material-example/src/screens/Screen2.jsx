import React from "react";
import { View, Text, StyleSheet } from "react-native";
import OptionButton from "../components/OptionButton";

const Screen2 = (props) => {
  return (
    <View style={styles.container}>
      <OptionButton text="Title" onPress={props.toggleTitle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Screen2;
