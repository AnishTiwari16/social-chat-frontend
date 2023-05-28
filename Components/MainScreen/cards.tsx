import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { data } from "../../Config/randomPosts";
import { useTailwind } from "tailwind-rn/dist";
import Avatar from "react-native-vector-icons/EvilIcons";
import Dots from "react-native-vector-icons/Entypo";
import { Pressable } from "react-native";
import UnlikeIcon from "react-native-vector-icons/AntDesign";
const Cards = () => {
  const tw = useTailwind();
  const [likePost, setLikePost] = React.useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data.map((elem) => {
        return (
          <View style={styles.container} key={elem.id}>
            <View style={styles.profileContainer}>
              <Avatar name="user" size={35} />
              <Text style={tw("my-auto pl-2")}>{elem.username}</Text>
              <Dots
                name="dots-three-horizontal"
                size={20}
                style={tw("my-auto ml-auto")}
              />
            </View>
            <Image
              source={{ uri: elem.image }}
              alt="posts"
              style={styles.postsImage}
            />
            <View style={styles.postInfo}>
              <Pressable
                onPress={() => {
                  setLikePost(!likePost);
                }}
                style={tw("mr-2")}
              >
                {likePost ? (
                  <Image
                    source={require("../../assets/PostIcons/likeIcon.png")}
                  />
                ) : (
                  <UnlikeIcon name="hearto" size={24} />
                )}
              </Pressable>
              <Pressable>
                <Image
                  source={require("../../assets/PostIcons/comment.png")}
                  style={tw("mr-2")}
                />
              </Pressable>
              <Pressable>
                <Image
                  source={require("../../assets/PostIcons/shareIcon.png")}
                />
              </Pressable>
              <Pressable style={tw("ml-auto")}>
                <Image
                  source={require("../../assets/PostIcons/savePostIcon.png")}
                />
              </Pressable>
            </View>
            <Text style={tw("font-bold pt-3")}>100 Likes</Text>
            {elem.comments.map((items) => {
              return (
                <View style={styles.showingComments} key={items.id}>
                  <Text style={tw("font-bold pt-3")}>{items.username}:</Text>
                  <Text style={tw("font-normal pt-3 pl-1")}>
                    {items.comment}
                  </Text>
                </View>
              );
            })}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Cards;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 20,
  },
  profileContainer: {
    flexDirection: "row",
  },
  postsImage: {
    aspectRatio: 1,
    width: "100%",
  },
  postInfo: {
    flexDirection: "row",
  },
  showingComments: {
    flexDirection: "row",
  },
});
