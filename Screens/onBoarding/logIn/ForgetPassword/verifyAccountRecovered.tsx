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
const VerifyAccountRecovered = ({ navigation }) => {
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
                            Let's Roll animation
                        </Text>
                        <View style={tw('py-12')}>
                            <Select
                                name="edit"
                                size={50}
                                color="#9b9b9b"
                                style={tw('text-center pb-5')}
                            />
                            <Text style={tw('text-center text-blue-500 pb-5')}>
                                Account recovered successfully
                            </Text>
                            <View style={tw('bg-blue-500 p-1 rounded')}>
                                <Button
                                    title="Let's Roll"
                                    color="white"
                                    onPress={() => navigation.navigate('LogIn')}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default VerifyAccountRecovered;
