import {
    Button,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import Disclaimer from '../../../Components/disclaimer';
import EyeOpen from 'react-native-vector-icons/Entypo';
import EyeClose from 'react-native-vector-icons/Entypo';
const Login = ({ navigation }) => {
    const tw = useTailwind();
    const [userID, setUserId] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={tw('py-28 px-10')}>
                        <Text style={tw(' font-medium text-2xl text-gray-700')}>
                            Login
                        </Text>
                        <View style={tw('py-12')}>
                            <TextInput
                                style={tw(
                                    'h-12 border-2 border-neutral-300 p-2.5 my-5'
                                )}
                                placeholder="User ID"
                                onChangeText={(e) => setUserId(e)}
                                value={userID}
                            />
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    style={tw(
                                        'h-12 border-2 border-neutral-300 p-2.5 mb-5 flex-1'
                                    )}
                                    onChangeText={(e) => setPassword(e)}
                                    placeholder="Password"
                                    value={password}
                                    secureTextEntry={
                                        showPassword ? false : true
                                    }
                                />
                                {!showPassword ? (
                                    <EyeOpen
                                        name="eye-with-line"
                                        size={25}
                                        color="#9b9b9b"
                                        style={tw('absolute top-3 right-2')}
                                        onPress={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    />
                                ) : (
                                    <EyeClose
                                        name="eye"
                                        size={25}
                                        color="#9b9b9b"
                                        style={tw('absolute top-3 right-2')}
                                        onPress={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    />
                                )}
                            </View>
                            <TouchableOpacity
                                style={tw('items-end')}
                                onPress={() =>
                                    navigation.navigate('VerifyEmail')
                                }
                            >
                                <Text style={tw('text-blue-500')}>
                                    Forget password?
                                </Text>
                            </TouchableOpacity>
                            <View style={tw('bg-blue-500 p-1 rounded my-7')}>
                                <Button
                                    title="Login"
                                    color="white"
                                    // onPress={() => Alert.alert('Simple Button pressed')}
                                />
                            </View>
                            <View
                                style={tw('border-t-2 border-y-slate-300 mb-7')}
                            ></View>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('SignUpEmail')
                                }
                            >
                                <Text style={tw('text-center text-blue-500')}>
                                    Don't have an account? Signup
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Disclaimer />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
export default Login;
