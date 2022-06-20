import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import React, { useContext } from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { AuthContext } from '../Context/AuthContext';

import { useNavigation } from '@react-navigation/native';
import HeaderHome from '../components/Header/HeaderHome';

const HomeScreen = () => {
    const { isLoading, logout, userInfo } = useContext(AuthContext);
    const Navigation = useNavigation();
    
    console.log("ha data", logout);

    return (
        <SafeAreaView style={tw`bg-white h-full p x-3`}>
            <HeaderHome />
            <Spinner visible={isLoading} />
            <Text>Welcom {userInfo.data.user.name}</Text>
            <Button title="Logout" color="red" onPress={() => Navigation.navigate('AuthScreen')} />
            <View style={tw`p-5`}>
                <NavOptions />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;