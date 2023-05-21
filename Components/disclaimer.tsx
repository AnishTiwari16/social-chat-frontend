import { Text, View } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
const Disclaimer = () => {
    const tw = useTailwind();
    return (
        <View style={tw('pt-20')}>
            <Text style={tw('font-medium pb-3 text-base text-gray-500')}>
                ZeroHero
            </Text>
            <Text style={tw('text-gray-500')}>
                NSE & BSE - SEBI Registered | MCX - SEBI Registered | CDSL -
                SEBI Registered
            </Text>
        </View>
    );
};

export default Disclaimer;
