import { StyleSheet } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import GettingStarted from './Screens/onBoarding/gettingStarted';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/onBoarding/login';
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        //@ts-ignore - TailwindProvider is missing a type definition
        <TailwindProvider utilities={utilities}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={GettingStarted}
                        options={{ title: 'Welcome' }}
                    />
                    <Stack.Screen
                        name="LogIn"
                        component={Login}
                        options={{ title: null }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </TailwindProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
