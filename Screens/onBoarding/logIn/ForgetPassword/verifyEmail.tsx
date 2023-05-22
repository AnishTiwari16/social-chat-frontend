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
import { useTailwind } from 'tailwind-rn';
import React from 'react';
import Disclaimer from '../../../../Components/disclaimer';
import Avatar from 'react-native-vector-icons/FontAwesome5';
const VerifyEmail = ({ navigation }) => {
    const tw = useTailwind();
    const [verifyEmail, setVerifyEmail] = React.useState('');
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={tw('py-28 px-10')}>
                        <Text style={tw(' font-medium text-2xl text-gray-700')}>
                            Verify email
                        </Text>
                        <View style={tw('py-12')}>
                            <Avatar
                                name="user-circle"
                                size={50}
                                color="#9b9b9b"
                                style={tw('text-center pb-5')}
                            />

                            <Text style={tw('text-center text-blue-500')}>
                                Verify your email
                            </Text>

                            <TextInput
                                style={tw(
                                    'h-12 border-2 border-neutral-300 p-2.5 my-5'
                                )}
                                placeholder="Verify your email"
                                onChangeText={(e) => setVerifyEmail(e)}
                                value={verifyEmail}
                            />
                            <View style={tw('bg-blue-500 p-1 rounded')}>
                                <Button
                                    title="Next"
                                    color="white"
                                    onPress={() =>
                                        navigation.navigate(
                                            'VerifyVerificationSetup'
                                        )
                                    }
                                />
                            </View>
                        </View>
                        <Disclaimer />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default VerifyEmail;
