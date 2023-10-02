import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar as ReactStatus } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/components/TabNavigator";

export default function App() {
  return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
