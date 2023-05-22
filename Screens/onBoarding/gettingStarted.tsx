import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import Disclaimer from '../../Components/disclaimer';
const GettingStarted = ({ navigation }) => {
    const tw = useTailwind();
    return (
        <SafeAreaView>
            <View style={tw('py-28 px-10')}>
                <Text style={tw(' font-semibold text-4xl text-gray-700')}>
                    Welcome to
                </Text>
                <Text style={tw(' font-semibold text-4xl text-gray-700')}>
                    <Text style={tw('text-blue-500')}>kite</Text> by Social Chat
                </Text>

                <View style={tw('py-10')}>
                    <View style={tw('border-y-2 border-y-slate-200')}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('LogIn')}
                        >
                            <Text style={tw('text-lg py-3 text-gray-500')}>
                                Login to Kite
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tw('border-b-2 border-y-slate-200')}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUpEmail')}
                        >
                            <Text style={tw('text-lg py-3 text-gray-500')}>
                                Open a new account
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Disclaimer />
            </View>
        </SafeAreaView>
    );
};

export default GettingStarted;
