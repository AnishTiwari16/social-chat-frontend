import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { profileData } from "../../config/profileData";

const EditProfileScreen = () => {
  const tw = useTailwind();
  return (
    <SafeAreaView style={tw("bg-white h-full")}>
      <View style={tw("p-2.5")}>
        <View style={styles.centerDiv}>
          <Image
            source={{
              uri: profileData.profile_image,
            }}
            alt="UserProfile"
            style={styles.userProfile}
          />
          <Text style={tw("pt-5 text-blue-500 font-semibold")}>
            Change profile photo
          </Text>
        </View>
        <View style={tw("py-5")}>
          <Text>Name</Text>
        </View>
        <View style={tw("py-5")}>
          <Text>Username</Text>
        </View>
        <View style={tw("py-5")}>
          <Text>Website</Text>
        </View>
        <View style={tw("py-5")}>
          <Text>Bio</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  userProfile: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  centerDiv: {
    alignSelf: "center",
  },
});
