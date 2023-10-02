import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);
  const [isVisible10, setIsVisible10] = useState(false);
  const [isVisible11, setIsVisible11] = useState(false);
  const [isVisible12, setIsVisible12] = useState(false);
  const [isVisible13, setIsVisible13] = useState(false);
  const [isVisible14, setIsVisible14] = useState(false);
  const [isVisible15, setIsVisible15] = useState(false);
  const [isVisible16, setIsVisible16] = useState(false);
  const [isVisible17, setIsVisible17] = useState(false);
  const [isVisible18, setIsVisible18] = useState(false);
  const [isVisible19, setIsVisible19] = useState(false);
  const [isVisible20, setIsVisible20] = useState(false);
  const [isVisible21, setIsVisible21] = useState(false);
  const [isVisible22, setIsVisible22] = useState(false);
  const [isVisible23, setIsVisible23] = useState(false);
  const [isVisible24, setIsVisible24] = useState(false);
  const [isVisible25, setIsVisible25] = useState(false);
  const [isVisible26, setIsVisible26] = useState(false);
  const [isVisible27, setIsVisible27] = useState(false);
  const [isVisible28, setIsVisible28] = useState(false);
  const [isVisible29, setIsVisible29] = useState(false);

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };
  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };
  const toggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
  };
  const toggleVisibility4 = () => {
    setIsVisible4(!isVisible4);
  };
  const toggleVisibility5 = () => {
    setIsVisible5(!isVisible5);
  };
  const toggleVisibility6 = () => {
    setIsVisible6(!isVisible6);
  };
  const toggleVisibility7 = () => {
    setIsVisible7(!isVisible7);
  };
  const toggleVisibility8 = () => {
    setIsVisible8(!isVisible8);
  };
  const toggleVisibility9 = () => {
    setIsVisible9(!isVisible9);
  };
  const toggleVisibility10 = () => {
    setIsVisible10(!isVisible10);
  };
  const toggleVisibility11 = () => {
    setIsVisible11(!isVisible11);
  };
  const toggleVisibility12 = () => {
    setIsVisible12(!isVisible12);
  };
  const toggleVisibility13 = () => {
    setIsVisible13(!isVisible13);
  };
  const toggleVisibility14 = () => {
    setIsVisible14(!isVisible14);
  };
  const toggleVisibility15 = () => {
    setIsVisible15(!isVisible15);
  };
  const toggleVisibility16 = () => {
    setIsVisible16(!isVisible16);
  };
  const toggleVisibility17 = () => {
    setIsVisible17(!isVisible17);
  };
  const toggleVisibility18 = () => {
    setIsVisible18(!isVisible18);
  };
  const toggleVisibility19 = () => {
    setIsVisible19(!isVisible19);
  };
  const toggleVisibility20 = () => {
    setIsVisible20(!isVisible20);
  };
  const toggleVisibility21 = () => {
    setIsVisible21(!isVisible21);
  };
  const toggleVisibility22 = () => {
    setIsVisible22(!isVisible22);
  };
  const toggleVisibility23 = () => {
    setIsVisible23(!isVisible23);
  };
  const toggleVisibility24 = () => {
    setIsVisible24(!isVisible24);
  };
  const toggleVisibility25 = () => {
    setIsVisible25(!isVisible25);
  };
  const toggleVisibility26 = () => {
    setIsVisible26(!isVisible26);
  };
  const toggleVisibility27 = () => {
    setIsVisible27(!isVisible27);
  };
  const toggleVisibility28 = () => {
    setIsVisible28(!isVisible28);
  };
  const toggleVisibility29 = () => {
    setIsVisible29(!isVisible29);
  };

  return (
    <Tab.Navigator
      style={{ marginTop: 30 }}
      screenOptions={({ route }) => ({
        title: isVisible1 ? "TITULO" : undefined,
        tabBarLabel: isVisible2
          ? ({ focused, color }) => (
              <Text style={{ color: focused ? "black" : "cyan" }}>
                {route.name}
              </Text>
            )
          : undefined,

        tabBarAccessibilityLabel: isVisible3
          ? "Tab Accessibility Label"
          : undefined,
        tabBarAllowFontScaling: isVisible4,
        tabBarShowLabel: isVisible5,
        tabBarIcon: isVisible6
          ? ({ focused, color }) => (
              <Text
                name={focused ? "icon-focused" : "icon-inactive"}
                color={color}
              >
                😛
              </Text>
            )
          : undefined,
        tabBarShowIcon: isVisible7,
        tabBarBadge: isVisible8
          ? () => (
              <View
                style={{ backgroundColor: "red", borderRadius: 10, padding: 5 }}
              >
                <Text style={{ color: "white" }}>5</Text>
              </View>
            )
          : undefined,
        tabBarIndicator: !isVisible9
          ? () => <View style={{ backgroundColor: "blue", height: 5 }} />
          : undefined,
        tabBarIndicatorStyle: isVisible10
          ? {
              height: 4,
              backgroundColor: "orange",
            }
          : undefined,
        tabBarIndicatorContainerStyle: isVisible11
          ? {
              borderColor: "purple",
              borderWidth: 2,
              borderRadius: 3,
            }
          : undefined,
        tabBarTestID: isVisible12 ? "tab-test-id" : undefined,
        tabBarActiveTintColor: isVisible13 ? "red" : undefined,
        tabBarInactiveTintColor: isVisible14 ? "gray" : undefined,
        tabBarGap: isVisible15 ? 20 : undefined,
        tabBarAndroidRipple: isVisible16 ? { borderless: false } : undefined,
        tabBarPressColor: isVisible17 ? "red" : undefined,
        tabBarPressOpacity: isVisible18 ? 0.8 : undefined,
        tabBarBounces: isVisible19,
        tabBarScrollEnabled: isVisible20 ? true : undefined,
        tabBarIconStyle: isVisible21
          ? { backgroundColor: "pink", borderRadius: 20 }
          : undefined,
        tabBarLabelStyle: isVisible22
          ? { fontSize: 12, color: "green" }
          : undefined,
        tabBarItemStyle: isVisible23
          ? {
              backgroundColor: "violet",
              padding: 5,
              margin: 5,
              borderRadius: 10,
              opacity: 0.4,
            }
          : undefined,
        tabBarContentContainerStyle: isVisible24
          ? { backgroundColor: "yellow", margin: 5 }
          : undefined,
        tabBarStyle: isVisible25
          ? { backgroundColor: "powderblue" }
          : undefined,
        swipeEnabled: isVisible26,
        lazy: isVisible27,
        lazyPreloadDistance: isVisible28 ? 1 : undefined,
        lazyPlaceholder: isVisible29
          ? () => <Text>Cargando...</Text>
          : undefined,
      })}
    >
      <Tab.Screen name="Props" component={Screen1} />
      <Tab.Screen name="Options">
        {() => (
          <Screen2
            toggle1={toggleVisibility1}
            toggle2={toggleVisibility2}
            toggle3={toggleVisibility3}
            toggle4={toggleVisibility4}
            toggle5={toggleVisibility5}
            toggle6={toggleVisibility6}
            toggle7={toggleVisibility7}
            toggle8={toggleVisibility8}
            toggle9={toggleVisibility9}
            toggle10={toggleVisibility10}
            toggle11={toggleVisibility11}
            toggle12={toggleVisibility12}
            toggle13={toggleVisibility13}
            toggle14={toggleVisibility14}
            toggle15={toggleVisibility15}
            toggle16={toggleVisibility16}
            toggle17={toggleVisibility17}
            toggle18={toggleVisibility18}
            toggle19={toggleVisibility19}
            toggle20={toggleVisibility20}
            toggle21={toggleVisibility21}
            toggle22={toggleVisibility22}
            toggle23={toggleVisibility23}
            toggle24={toggleVisibility24}
            toggle25={toggleVisibility25}
            toggle26={toggleVisibility26}
            toggle27={toggleVisibility27}
            toggle28={toggleVisibility28}
            toggle29={toggleVisibility29}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Events & Helpers" component={Screen3} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
