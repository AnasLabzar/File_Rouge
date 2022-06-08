import { StyleSheet, SafeAreaView, Image, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import TextDemoPage from '../components/Text/TextDemoPage';
import ButtonDemoPage from '../components/Button/ButtonDemoPage';


const DemoScreen = () => {
    return (
        <SafeAreaView style={tw`bg-[#f3e8d9] h-full`}>
            <View style={tw`p-5 mt-8`}>
                <Image
                    style={{
                        width: 250,
                        height: 250,
                        resizeMode: 'contain',
                        marginLeft: 30,
                    }}
                    source={{
                        uri: "https://i.ibb.co/bQ8tYHL/illustrator-demo.png",
                    }}
                />
                <TextDemoPage />
                <ButtonDemoPage />
            </View>
        </SafeAreaView>
    )
}

export default DemoScreen

const styles = StyleSheet.create({})