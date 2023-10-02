import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import OptionButton from "../components/OptionButton";

const Screen2 = (props) => {
  return (
    <ScrollView style={styles.container}>
      <OptionButton text="title" onPress={props.toggle1} />
      <OptionButton text="tabBarLabel" onPress={props.toggle2} />
      <OptionButton text="tabBarAccessibilityLabel" onPress={props.toggle3} />
      <OptionButton text="tabBarAllowFontScaling" onPress={props.toggle4} />
      <OptionButton text="tabBarShowLabel" onPress={props.toggle5} />
      <OptionButton text="tabBarIcon" onPress={props.toggle6} />
      <OptionButton text="tabBarShowIcon" onPress={props.toggle7} />
      <OptionButton text="tabBarBadge" onPress={props.toggle8} />
      <OptionButton text="tabBarIndicator" onPress={props.toggle9} />
      <OptionButton text="tabBarIndicatorStyle" onPress={props.toggle10} />
      <OptionButton
        text="tabBarIndicatorContainerStyle"
        onPress={props.toggle11}
      />
      <OptionButton text="tabBarTestID" onPress={props.toggle12} />
      <OptionButton text="tabBarActiveTintColor" onPress={props.toggle13} />
      <OptionButton text="tabBarInactiveTintColor" onPress={props.toggle14} />
      <OptionButton text="tabBarGap" onPress={props.toggle15} />
      <OptionButton text="tabBarAndroidRipple" onPress={props.toggle16} />
      <OptionButton text="tabBarPressColor" onPress={props.toggle17} />
      <OptionButton text="tabBarPressOpacity" onPress={props.toggle18} />
      <OptionButton text="tabBarBounces" onPress={props.toggle19} />
      <OptionButton text="tabBarScrollEnabled" onPress={props.toggle20} />
      <OptionButton text="tabBarIconStyle" onPress={props.toggle21} />
      <OptionButton text="tabBarLabelStyle" onPress={props.toggle22} />
      <OptionButton text="tabBarItemStyle" onPress={props.toggle23} />
      <OptionButton
        text="tabBarContentContainerStyle"
        onPress={props.toggle24}
      />
      <OptionButton text="tabBarStyle" onPress={props.toggle25} />
      <OptionButton text="swipeEnabled" onPress={props.toggle26} />
      <OptionButton text="lazy" onPress={props.toggle27} />
      <OptionButton text="lazyPreloadDistance" onPress={props.toggle28} />
      <OptionButton text="lazyPlaceholder" onPress={props.toggle29} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Screen2;
