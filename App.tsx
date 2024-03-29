import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import GettingStarted from "./Screens/onBoarding/gettingStarted";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/onBoarding/logIn/login";
import SignUpEmail from "./Screens/onBoarding/signUp/signUpEmail";
import VerificationSetup from "./Screens/onBoarding/signUp/verificationSetup";
import SignUpUsername from "./Screens/onBoarding/signUp/signUpUsername";
import SignUpPassword from "./Screens/onBoarding/signUp/signUpPassword";
import SignUpAccountCreated from "./Screens/onBoarding/signUp/signUpAccountCreated";
import VerifyEmail from "./Screens/onBoarding/logIn/ForgetPassword/verifyEmail";
import VerifyVerificationSetup from "./Screens/onBoarding/logIn/ForgetPassword/verifyVerificationSetup";
import VerifyChoosePassword from "./Screens/onBoarding/logIn/ForgetPassword/verifyChoosePassword";
import VerifyAccountRecovered from "./Screens/onBoarding/logIn/ForgetPassword/verifyAccountRecovered";
import MainScreen from "./Screens/HomeScreen";
import Chats from "./Components/ChatsScreen/chats";
import EditProfileScreen from "./Components/EditProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //@ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={GettingStarted} />
          <Stack.Screen name="LogIn" component={Login} />
          <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
          <Stack.Screen
            name="Verification_Setup"
            component={VerificationSetup}
          />
          <Stack.Screen name="SignUpUsername" component={SignUpUsername} />
          <Stack.Screen name="SignUpPassword" component={SignUpPassword} />
          <Stack.Screen
            name="SignUpAccountCreated"
            component={SignUpAccountCreated}
          />
          <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
          <Stack.Screen
            name="VerifyVerificationSetup"
            component={VerifyVerificationSetup}
          />
          <Stack.Screen
            name="VerifyChoosePassword"
            component={VerifyChoosePassword}
          />
          <Stack.Screen
            name="VerifyAccountRecovered"
            component={VerifyAccountRecovered}
          />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen
            name="ChatsScreen"
            component={Chats}
            options={{
              headerShown: true,
              title: "Username",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
            options={{
              headerShown: true,
              title: "Edit profile",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              animation: "slide_from_bottom",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
