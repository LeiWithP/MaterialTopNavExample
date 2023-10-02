import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Alert } from 'react-native';


const Screen3 = ({ route }) => {
  const navigation = useNavigation();

  const navigateToPropsScreen = () => {
    navigation.jumpTo('Props', {})
  };
  const navigateToOptionsScreen = () => {
    navigation.jumpTo('Options', {})
  };

  useEffect(() => {
    const longPress = navigation.addListener('tabLongPress', () => {
      // Mostrar una alerta cuando se detecta el tabLongPress
      Alert.alert(
        'Alerta',
        'Se ha realizado un tabLongPress en la pestaña',
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false }
      );
    });
  
    return longPress;
  }, [navigation]);
  

  return (
    <ImageBackground
      source={{
        uri: "https://static.vecteezy.com/system/resources/previews/002/048/142/original/abstract-minimal-geometric-pattern-design-of-black-and-green-decorative-design-background-illustration-vector.jpg",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.rectangle}>
          <Text style={styles.title}>Events & Helpers</Text>
          <Text style={{ fontSize: 12, marginTop: 10, color: "black" }}>
            
          </Text>
        </View>

        <View style= {{marginBottom: 10}}>

          <Button
            title="Go to Props"
            onPress={navigateToPropsScreen}
            color="red"
            />
        </View>
        <Button
          title="Go to Options"
          onPress={navigateToOptionsScreen}
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
    width: 130,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default Screen3;
