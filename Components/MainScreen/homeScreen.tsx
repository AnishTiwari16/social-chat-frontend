import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "./navbar";
import Cards from "./cards";
import { useTailwind } from "tailwind-rn/dist";

const HomeScreen = ({ navigation }) => {
  const tw = useTailwind();
  return (
    <SafeAreaView style={tw("bg-white")}>
      <View style={tw("p-2.5 ")}>
        <Navbar navigation={navigation} />
        <Cards />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
