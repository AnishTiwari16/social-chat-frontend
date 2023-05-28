import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
const Navbar = ({ navigation }) => {
  const tw = useTailwind();
  return (
    <View style={styles.navbarContainer}>
      <Text style={tw("text-xl text-blue-500")}>kite</Text>
      <TouchableOpacity
        style={tw("ml-auto")}
        onPress={() => navigation.navigate("ChatsScreen")}
      >
        <Image source={require("../../assets/PostIcons/chatIcon.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: "row",
  },
});
