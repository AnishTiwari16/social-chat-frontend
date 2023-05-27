import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';
const Navbar = () => {
    const tw = useTailwind();
    return (
        <View style={styles.navbarContainer}>
            <Text style={tw('text-xl text-blue-500')}>kite</Text>
            <Image
                source={require('../../assets/PostIcons/chatIcon.png')}
                style={tw('ml-auto')}
            />
        </View>
    );
};

export default Navbar;

const styles = StyleSheet.create({
    navbarContainer: {
        flexDirection: 'row',
    },
});
