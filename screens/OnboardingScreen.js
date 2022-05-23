import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { render } from 'react-dom';
import tw from 'twrnc';


const OnboardingScreen = () => {
    const data = [
        {
            key: 'somethun',
            title: 'Title 1',
            text: 'Description.\nSay something cool',
            image: require('../assets/Images/1.png'),
            backgroundColor: '#59b2ab',
        },
        {
            key: 'somethun-dos',
            title: 'Title 2',
            text: 'Other cool stuff',
            image: require('../assets/Images/2.png'),
            backgroundColor: '#febe29',
        },
        {
            key: 'somethun1',
            title: 'Rocket guy',
            text: 'I\'m already out of descriptions\nLorem ipsum bla bla bla',
            image: require('../assets/Images/3.png'),
            backgroundColor: '#22bcb5',
        },
    ];
    
    state = { showHomePage: false };
    _renderItem = ({ item }) => {
        return (
            <SafeAreaView style={tw`flex-1 h-full bg-[#f3e8d9]`}>
                <Image
                    source={item.image}
                    style={{
                        resizeMode: 'cover',
                        height: '70%',
                        width: "100%",
                    }}
                />
            <Text style={tw`pt-10 pb-6 text-xl font-bold text-[#21465b] self-center`}>
                {item.title}
            </Text>
            <Text style={tw`text-center text-[#b5b5b5] text-lg px-10`}>
                {item.text}
            </Text>
            </SafeAreaView>
        )
    }

    return (
        <AppIntroSlider 
            renderItem={_renderItem}
            data={data}
            activeDotStyle={tw`bg-black w-6`}
            style={tw`text-black`}
            onClick={"hello world"}
        />
    );
}

export default OnboardingScreen