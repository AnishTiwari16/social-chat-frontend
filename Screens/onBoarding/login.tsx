import {
    Button,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import Disclaimer from '../../Components/disclaimer';
import EyeOpen from 'react-native-vector-icons/Entypo';
import EyeClose from 'react-native-vector-icons/Entypo';
const Login = () => {
    const tw = useTailwind();
    const [userID, setUserId] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={tw('py-16 px-10')}>
                    <Text style={tw(' font-medium text-2xl text-gray-700')}>
                        Login
                    </Text>
                    <View style={tw('py-12')}>
                        <TextInput
                            style={tw(
                                'h-12 border-2 border-neutral-300 p-2.5 my-7'
                            )}
                            placeholder="User ID"
                            onChangeText={(e) => setUserId(e)}
                            value={userID}
                            autoCapitalize={'characters'}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={tw(
                                    'h-12 border-2 border-neutral-300 p-2.5 mb-7 flex-1'
                                )}
                                onChangeText={(e) => setPassword(e)}
                                placeholder="Password"
                                value={password}
                                secureTextEntry={showPassword ? false : true}
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
                        <View style={tw('bg-blue-500 p-1 rounded')}>
                            <Button
                                title="LOGIN"
                                color="white"
                                // onPress={() => Alert.alert('Simple Button pressed')}
                            />
                        </View>
                    </View>
                    <Disclaimer />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};
export default Login;
