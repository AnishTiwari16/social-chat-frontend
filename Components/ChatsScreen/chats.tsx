import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { chats } from "../../Config/randomChats";
import UseDebounce from "../../Hooks/useDebounce";
const Chats = () => {
  const tw = useTailwind();
  const [searchChats, setSearchChats] = React.useState("");
  const debouncedUserSearch = UseDebounce(searchChats, 1000);
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={tw("p-2.5")}>
            <TextInput
              style={styles.input}
              onChangeText={setSearchChats}
              value={searchChats}
              placeholder="Search"
              keyboardType="default"
            />

            {chats
              .filter((elem) => {
                return elem.username
                  .toLowerCase()
                  .includes(debouncedUserSearch.toLowerCase());
              })
              .map((elem, index) => {
                return (
                  <View style={styles.searchContainer} key={index}>
                    <Image
                      source={{
                        uri: elem.profile_image,
                      }}
                      alt="searchData"
                      style={styles.searchUserImage}
                    />
                    <View style={styles.messagesContainer}>
                      <Text style={tw("my-auto pl-3")}>{elem.username}</Text>
                      <View style={styles.latestMessageContainer}>
                        <Text style={tw("my-auto pl-3 text-gray-500")}>
                          {elem.lastmessage}
                        </Text>
                        <Text style={tw("my-auto pl-3 text-gray-500")}>
                          {elem.time}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chats;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: "#6262821F",
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  searchUserImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  messagesContainer: {
    flexDirection: "column",
    width: "88%",
  },
  latestMessageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
