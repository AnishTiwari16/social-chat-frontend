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
} from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import Check from 'react-native-vector-icons/AntDesign';
const VerifyVerificationSetup = ({ navigation }) => {
    const tw = useTailwind();

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={tw('px-10 py-28')}>
                        <Text style={tw(' font-medium text-2xl text-gray-700')}>
                            Verify
                        </Text>
                        <View style={tw('py-12')}>
                            <Check
                                name="checkcircleo"
                                size={50}
                                color="#9b9b9b"
                                style={tw('text-center pb-5')}
                            />
                            <Text style={tw('text-center text-blue-500')}>
                                A verification code has been sent
                            </Text>
                            <Text style={tw('text-center text-blue-500')}>
                                to your email
                            </Text>

                            <TextInput
                                style={tw(
                                    'h-12 border-2 border-neutral-300 p-2.5 my-5'
                                )}
                                placeholder="Enter 6 digit code here"
                                // onChangeText={(e) => setEmail(e)}
                                // value={email}
                            />
                            <View style={tw('bg-blue-500 p-1 rounded')}>
                                <Button
                                    title="Next"
                                    color="white"
                                    onPress={() => {
                                        navigation.navigate(
                                            'VerifyChoosePassword'
                                        );
                                    }}
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
