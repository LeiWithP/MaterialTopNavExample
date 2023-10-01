import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import {
  Dimensions,
  StyleSheet,
  View,
  StatusBar as ReactStatus,
} from "react-native";
import MyTabBar from "./MyTabBar";
import SubScreen1 from "../screens/SubScreen1";

const Tab = createMaterialTopTabNavigator();
const SubTab = createMaterialTopTabNavigator();

const SubTabNavigator = () => {
  return (
    <SubTab.Navigator
      tabBarPosition="bottom"
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <SubTab.Screen
        name="SubTab1"
        component={Screen1}
        initialParams={{ texto: "This is the content of Screen 1." }}
      />
      <SubTab.Screen name="SubTab2" component={SubScreen1} />
    </SubTab.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      id="TabNavigator"
      initialRouteName="Home"
      tabBarPosition="top"
      initialLayout={Dimensions.get("window").width}
      keyboardDismissMode="on-drag"
      style={styles.container}
      backBehavior="order"
    >
      <Tab.Screen name="Home" component={SubTabNavigator} />
      <Tab.Screen name="Second" component={Screen2} />
      <Tab.Screen name="Third" component={Screen3} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: ReactStatus.currentHeight,
    width: "100%",
  },
});

export default TabNavigator;
