import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { SearchUserData } from '../../config/searchUsers';
import SeachIcon from 'react-native-vector-icons/AntDesign';
const SearchScreen = () => {
    const tw = useTailwind();
    const [search, setSearch] = React.useState('');
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={tw('p-2.5')}>
                        <View>
                            <SeachIcon name="search1" size={25} />
                            <TextInput
                                style={styles.input}
                                onChangeText={setSearch}
                                value={search}
                                placeholder="Search"
                                keyboardType="default"
                            />
                        </View>
                        {search.length > 0 ? (
                            <ScrollView>
                                {SearchUserData.filter((elem: any) => {
                                    return elem.username
                                        .toLowerCase()
                                        .includes(search.toLowerCase());
                                }).map((elem, index) => {
                                    return (
                                        <View
                                            style={styles.searchContainer}
                                            key={index}
                                        >
                                            <Image
                                                source={{
                                                    uri: elem.profile_image,
                                                }}
                                                alt="searchData"
                                                style={styles.searchUserImage}
                                            />
                                            <Text style={tw('my-auto pl-3')}>
                                                {elem.username}
                                            </Text>
                                        </View>
                                    );
                                })}
                            </ScrollView>
                        ) : (
                            <Text>yaha logo ayega koi</Text>
                        )}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: '#6262821F',
        borderRadius: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    searchUserImage: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});
