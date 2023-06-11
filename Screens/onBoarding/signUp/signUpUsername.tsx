import {
  Alert,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import Select from "react-native-vector-icons/AntDesign";
const SignUpUsername = ({ navigation, route }) => {
  const { email } = route.params;
  const tw = useTailwind();
  const [userName, setUserName] = React.useState("");
  const [usernameStatus, setUsernameStatusStatus] = React.useState("");

  const handleUsername = async () => {
    try {
      const resp = await fetch("http://localhost:8000/checkusername", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, username: userName }),
      });
      const data = resp.json();
      data.then((res) => {
        if (res.error) {
          setUsernameStatusStatus(res.message);
        } else {
          navigation.navigate("SignUpPassword", {
            email: res.email,
            username: res.username,
          });
        }
      });
    } catch (err) {
      Alert.alert("Something went wrong, please try again later");
    }
  };
  React.useEffect(() => {
    if (usernameStatus) {
      setTimeout(() => {
        setUsernameStatusStatus("");
      }, 3000);
    }
  }, [usernameStatus]);
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={tw("px-10 py-28")}>
            <Text style={tw(" font-medium text-2xl text-gray-700")}>
              Choose a username
            </Text>
            <View style={tw("py-12")}>
              <Select
                name="edit"
                size={50}
                color="#9b9b9b"
                style={tw("text-center pb-5")}
              />
              <Text style={tw("text-center text-blue-500")}>
                Choose a Username
              </Text>
              <View style={tw("mt-5 mb-3")}>
                <TextInput
                  style={tw("h-12 border-2 border-neutral-300 p-2.5 my-5")}
                  placeholder="Enter a username"
                  onChangeText={(e) => setUserName(e)}
                />
                <Text style={tw("text-red-500 text-sm")}>{usernameStatus}</Text>
              </View>
              <View style={tw("bg-blue-500 p-1 rounded")}>
                <Button
                  title="Next"
                  color="white"
                  onPress={() => handleUsername()}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpUsername;
