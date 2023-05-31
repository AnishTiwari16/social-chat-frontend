import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import Menu from "react-native-vector-icons/Entypo";
import { profileData } from "../../config/profileData";
import Modal from "react-native-modal";
const ProfileScreen = ({ navigation }) => {
  const tw = useTailwind();
  const [isModalVisible, setModalVisible] = React.useState(false);

  return (
    <SafeAreaView style={tw("bg-white h-full")}>
      <View style={tw("p-2.5")}>
        <View style={styles.profileContainer}>
          <Text style={tw("font-bold")}>Username</Text>
          <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}>
            <Menu name="menu" size={25} />
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={isModalVisible}
          style={tw("w-full ml-0 mb-0")}
          onBackdropPress={() => setModalVisible(!isModalVisible)}
        >
          <View
            style={tw("bg-white absolute bottom-0 w-full h-1/4 rounded-t-lg")}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                paddingTop: 30,
                paddingHorizontal: 20,
              }}
              onPress={() => {
                setModalVisible(!isModalVisible),
                  navigation.navigate("EditProfileScreen");
              }}
            >
              <Text style={tw("pr-3")}>Settings</Text>
              <Image
                source={require("../../assets/PostIcons/settingsIcon.png")}
                alt="settingsIcon"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                paddingTop: 30,
                paddingHorizontal: 20,
              }}
            >
              <Text style={tw("pr-3")}>Saved</Text>
              <Image
                source={require("../../assets/PostIcons/savedIcon.png")}
                alt="savedIcon"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                paddingTop: 30,
                paddingHorizontal: 20,
              }}
            >
              <Text style={tw("pr-3")}>Favourites</Text>
              <Image
                source={require("../../assets/PostIcons/nameTagIcon.png")}
                alt="nameTagIcon"
              />
            </TouchableOpacity>
          </View>
        </Modal>
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
