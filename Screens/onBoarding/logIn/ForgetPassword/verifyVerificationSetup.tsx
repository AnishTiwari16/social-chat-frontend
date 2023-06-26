import {
  Alert,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import Check from "react-native-vector-icons/AntDesign";
import { useOtpCounter } from "../../../../hooks/useOtpCounter";
const VerifyVerificationSetup = ({ navigation, route }) => {
  const { email, verficationCode } = route.params;
  const tw = useTailwind();
  const [verifyOtp, setVerifyOtp] = React.useState("");
  const [verifyStatus, setVerifyStatus] = React.useState("");
  const [otpResponse, setOtpResponse] = React.useState("");
  const countdown = useOtpCounter(30);
  const handleOtpVerification = (verifyOtp) => {
    if (!verifyOtp) {
      setVerifyStatus("Please enter verification code");
    } else if (verficationCode != verifyOtp) {
      setVerifyStatus("Verification code is incorrect");
      setOtpResponse("");
    } else {
      navigation.navigate("VerifyChoosePassword");
    }
  };
  const handleResendOtp = async () => {
    try {
      const resp = await fetch("http://localhost:8000/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, screen: "forgetVerifyOtp" }),
      });
      const result = resp.json();
      result.then(async (res) => {
        if (!res.error) {
          setOtpResponse("Otp send successfully");
        }
      });
    } catch (err) {
      Alert.alert("Something went wrong, please try again later");
    }
  };
  React.useEffect(() => {
    if (verifyStatus) {
      setTimeout(() => {
        setVerifyStatus("");
      }, 3000);
    }
  }, [verifyStatus]);
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={tw("px-10 py-28")}>
            <Text style={tw(" font-medium text-2xl text-gray-700")}>
              Verify
            </Text>
            <View style={tw("py-12")}>
              <Check
                name="checkcircleo"
                size={50}
                color="#9b9b9b"
                style={tw("text-center pb-5")}
              />
              <Text style={tw("text-center text-blue-500")}>
                A verification code has been sent
              </Text>
              <Text style={tw("text-center text-blue-500")}>to your email</Text>

              <TextInput
                style={tw("h-12 border-2 border-neutral-300 p-2.5 my-5")}
                placeholder="Enter 6 digit code here"
                onChangeText={(e) => setVerifyOtp(e)}
                value={verifyOtp}
              />
              <View style={styles.betweenContainer}>
                <Text>Didn't receive otp</Text>
                {countdown === 0 ? (
                  <TouchableOpacity onPress={() => handleResendOtp()}>
                    <Text style={tw("text-blue-500")}>Resend</Text>
                  </TouchableOpacity>
                ) : (
                  <Text style={tw("text-slate-500 underline")}>
                    Resend in: {countdown}
                  </Text>
                )}
              </View>
              {verifyStatus.length > 0 ? (
                <Text style={tw("text-red-500 text-sm py-3")}>
                  {verifyStatus}
                </Text>
              ) : (
                <Text style={tw("text-green-500 text-sm py-3")}>
                  {otpResponse}
                </Text>
              )}
              <View style={tw("bg-blue-500 p-1 rounded")}>
                <Button
                  title="Next"
                  color="white"
                  onPress={() => handleOtpVerification(verifyOtp)}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerifyVerificationSetup;
const styles = StyleSheet.create({
  betweenContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
