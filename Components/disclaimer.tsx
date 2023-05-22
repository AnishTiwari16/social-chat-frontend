import { Text, View } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
const Disclaimer = () => {
    const tw = useTailwind();
    return (
        <View style={tw('pt-16')}>
            <Text style={tw('font-medium pb-3 text-base text-gray-500')}>
                Social Chat
            </Text>
            <Text style={tw('text-gray-500')}>
                Opinions expressed are personal and not representative of our
                organization. Please engage respectfully and independently
                verify information shared.
            </Text>
        </View>
    );
};

export default Disclaimer;
