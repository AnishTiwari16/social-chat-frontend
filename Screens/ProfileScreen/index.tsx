import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import Menu from "react-native-vector-icons/Entypo";
import { profileData } from "../../config/profileData";
const ProfileScreen = () => {
  const tw = useTailwind();
  return (
    <SafeAreaView>
      <View style={tw("p-2.5")}>
        <View style={styles.profileContainer}>
          <Text style={tw("font-bold")}>Username</Text>
          <Menu name="menu" size={25} />
        </View>
        <View style={tw("pt-5")}>
          <View style={styles.userFollwing}>
            <Image
              source={{
                uri: profileData.profile_image,
              }}
              alt="UserProfile"
              style={styles.userProfile}
            />

            <View style={tw("mx-auto my-auto")}>
              <View style={styles.followingStyling}>
                <Text>0</Text>
                <Text>{profileData.followers}</Text>
                <Text>{profileData.following}</Text>
              </View>
              <View style={styles.followingStyling}>
                <Text>Posts</Text>
                <Text>followers</Text>
                <Text>following</Text>
              </View>
            </View>
          </View>
          <Text style={tw("pt-4 font-semibold")}>{profileData.username}</Text>
          <Text style={tw("pt-1 w-6/12")}>{profileData.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userProfile: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  userFollwing: {
    flexDirection: "row",
  },
  followingStyling: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "65%",
    alignSelf: "center",
  },
});
