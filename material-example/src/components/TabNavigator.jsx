import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator style={{ marginTop: 30 }}>
      <Tab.Screen name="Home" component={Screen1} />
      <Tab.Screen name="Second" component={Screen2} />
      <Tab.Screen name="Third" component={Screen3} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
