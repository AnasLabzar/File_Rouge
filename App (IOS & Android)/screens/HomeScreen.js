import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 80,
                        height: 80,
                        resizeMode: 'contain',
                    }}
                    source={{
                        uri: "https://i.ibb.co/1qbN6VX/adaptive-icon.png",
                    }}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;