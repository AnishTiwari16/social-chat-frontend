import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Components/MainScreen/homeScreen';
const Tab = createBottomTabNavigator();
const MainScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Settings"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

export default MainScreen;
