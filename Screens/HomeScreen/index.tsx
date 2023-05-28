import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../Components/MainScreen/homeScreen";
import HomeIcon from "react-native-vector-icons/Entypo";
import SeachIcon from "react-native-vector-icons/AntDesign";
import Avatar from "react-native-vector-icons/EvilIcons";
import UnlikeIcon from "react-native-vector-icons/AntDesign";
import SearchScreen from "../../Components/SearchScreen";
import ProfileScreen from "../ProfileScreen";
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color }) => (
            <HomeIcon name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color }) => (
            <SeachIcon name="search1" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings2"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color }) => (
            <UnlikeIcon name="hearto" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color }) => (
            <Avatar name="user" size={35} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
