import React from "react";
import { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  const toggleTitleVisibility = () => {
    setIsTitleVisible(!isTitleVisible);
  };

  return (
    <Tab.Navigator
      style={{ marginTop: 30 }}
      screenOptions={({ route }) => ({
        title: isTitleVisible ? "Hello" : route.name,
      })}
    >
      <Tab.Screen name="Props" component={Screen1} />
      <Tab.Screen name="Options">
        {() => <Screen2 toggleTitle={toggleTitleVisibility} />}
      </Tab.Screen>
      <Tab.Screen name="Events & Helpers" component={Screen3} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
