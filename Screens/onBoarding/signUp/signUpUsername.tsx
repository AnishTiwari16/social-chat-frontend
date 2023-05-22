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
import Select from 'react-native-vector-icons/AntDesign';
const SignUpUsername = ({ navigation }) => {
    const tw = useTailwind();
    const [userName, setUserName] = React.useState('');
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={tw('px-10 py-28')}>
                        <Text style={tw(' font-medium text-2xl text-gray-700')}>
                            Choose a username
                        </Text>
                        <View style={tw('py-12')}>
                            <Select
                                name="edit"
                                size={50}
                                color="#9b9b9b"
                                style={tw('text-center pb-5')}
                            />
                            <Text style={tw('text-center text-blue-500')}>
                                Choose a Username
                            </Text>

                            <TextInput
                                style={tw(
                                    'h-12 border-2 border-neutral-300 p-2.5 my-5'
                                )}
                                placeholder="Enter a username"
                                onChangeText={(e) => setUserName(e)}
                                value={userName}
                            />
                            <View style={tw('bg-blue-500 p-1 rounded')}>
                                <Button
                                    title="Next"
                                    color="white"
                                    onPress={() =>
                                        navigation.navigate('SignUpPassword')
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SignUpUsername;
