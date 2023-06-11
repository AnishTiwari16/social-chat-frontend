import {
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
import Security from "react-native-vector-icons/MaterialCommunityIcons";
const SignUpPassword = ({ navigation, route }) => {
  const tw = useTailwind();
  const { email, username } = route.params;
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordValidation, setPasswordValidation] = React.useState("");

  const handlePassword = () => {
    if (!password || !confirmPassword) {
      setPasswordValidation("Please enter a password");
    } else if (password != confirmPassword) {
      setPasswordValidation("Password do not match");
    } else {
      navigation.navigate("SignUpAccountCreated", {
        email: email,
        username: username,
        password: password,
      });
    }
  };
  React.useEffect(() => {
    if (passwordValidation) {
      setTimeout(() => {
        setPasswordValidation("");
      }, 3000);
    }
  }, [passwordValidation]);
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={tw("px-10 py-28")}>
            <Text style={tw(" font-medium text-2xl text-gray-700")}>
              Choose a Password
            </Text>
            <View style={tw("py-12")}>
              <Security
                name="security"
                size={50}
                color="#9b9b9b"
                style={tw("text-center pb-5")}
              />
              <Text style={tw("text-center text-blue-500")}>
                Choose a strong password
              </Text>

              <TextInput
                style={tw("h-12 border-2 border-neutral-300 p-2.5 my-5")}
                secureTextEntry={true}
                placeholder="Enter password"
                onChangeText={(e) => setPassword(e)}
                value={password}
              />
              <View style={tw("mb-3")}>
                <TextInput
                  style={tw("h-12 border-2 border-neutral-300 p-2.5 mb-5")}
                  secureTextEntry={true}
                  placeholder="Confirm password"
                  onChangeText={(e) => setConfirmPassword(e)}
                  value={confirmPassword}
                />
                <Text style={tw("text-red-500 text-sm")}>
                  {passwordValidation}
                </Text>
              </View>
              <View style={tw("bg-blue-500 p-1 rounded")}>
                <Button
                  title="Next"
                  color="white"
                  onPress={() => handlePassword()}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpPassword;
