import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import GettingStarted from "./Screens/OnBoarding/gettingStarted";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/OnBoarding/logIn/login";
import SignUpEmail from "./Screens/OnBoarding/signUp/signUpEmail";
import VerificationSetup from "./Screens/OnBoarding/signUp/verificationSetup";
import SignUpUsername from "./Screens/OnBoarding/signUp/signUpUsername";
import SignUpPassword from "./Screens/OnBoarding/signUp/signUpPassword";
import SignUpAccountCreated from "./Screens/OnBoarding/signUp/signUpAccountCreated";
import VerifyEmail from "./Screens/OnBoarding/logIn/ForgetPassword/verifyEmail";
import VerifyVerificationSetup from "./Screens/OnBoarding/logIn/ForgetPassword/verifyVerificationSetup";
import VerifyChoosePassword from "./Screens/OnBoarding/logIn/ForgetPassword/verifyChoosePassword";
import VerifyAccountRecovered from "./Screens/OnBoarding/logIn/ForgetPassword/verifyAccountRecovered";
import MainScreen from "./Screens/HomeScreen";
import Chats from "./Components/ChatsScreen/chats";

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
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
