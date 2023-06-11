import {
  ActivityIndicator,
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
import { useTailwind } from "tailwind-rn";
import React from "react";
import Disclaimer from "../../../Components/disclaimer";
import Avatar from "react-native-vector-icons/FontAwesome5";
const SignUpEmail = ({ navigation }) => {
  const tw = useTailwind();
  const [email, setEmail] = React.useState("");
  const [emailStatus, setEmailStatus] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const handleEmail = async () => {
    try {
      setLoader(true);
      const res = await fetch("http://localhost:8000/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = res.json();
      data.then((res) => {
        if (res.error) {
          setEmailStatus(res.message);
        } else {
          navigation.navigate("Verification_Setup", {
            email: res.email,
            verification_code: res.VerificationCode,
          });
        }
      });
    } catch (err) {
      Alert.alert("Something went wrong, please try again later");
    }
    setLoader(false);
  };
  React.useEffect(() => {
    if (emailStatus) {
      setTimeout(() => {
        setEmailStatus("");
      }, 3000);
    }
  }, [emailStatus]);
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={tw("py-28 px-10")}>
            <Text style={tw(" font-medium text-2xl text-gray-700")}>
              Register
            </Text>
            <View style={tw("py-12")}>
              <Avatar
                name="user-circle"
                size={50}
                color="#9b9b9b"
                style={tw("text-center pb-5")}
              />

              <Text style={tw("text-center text-blue-500")}>
                Create a new account
              </Text>
              <View style={tw("mt-5 mb-3")}>
                <TextInput
                  style={tw("h-12 border-2 border-neutral-300 p-2.5 mb-2")}
                  placeholder="Enter your email"
                  onChangeText={(e) => setEmail(e)}
                  value={email}
                />

                <Text style={tw("text-red-500 text-sm")}>{emailStatus}</Text>
              </View>
              <View style={tw("bg-blue-500 p-1 rounded")}>
                {loader ? (
                  <View style={tw("h-9 pt-2")}>
                    <ActivityIndicator />
                  </View>
                ) : (
                  <Button
                    title="Next"
                    color="white"
                    onPress={() => handleEmail()}
                  />
                )}
              </View>
            </View>
            <Disclaimer />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpEmail;
