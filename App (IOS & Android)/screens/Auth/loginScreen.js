import React, { useContext, useState } from 'react'
import { View, Text, Pressable, TextInput, Button, TouchableOpacity, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../../Hooks/useTogglePasswordVisibility';
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const loginScreen = () => {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const {isLoading, login} = useContext(AuthContext);


    const Navigation = useNavigation();

    return (
        <View style={tw`mt-30 mx-8`}>
            <Spinner visible={isLoading} />
            <View style={tw`flex mx-auto`}>
                <Text style={tw`text-center opacity-70 text-3xl font-semibold`}>Hello Again !</Text>
                <Text style={tw`text-center text-xl opacity-40 mt-6`}>Wellcome back you've{'\n'}been missed!</Text>
            </View>
            <View style={tw`flex text-center mt-10`}>
                <TextInput
                    style={tw`w-full bg-white py-4 px-5 rounded-lg`}
                    placeholder="Enter email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={tw`w-full bg-white py-4 px-5 rounded-lg mt-4`}
                    name="password"
                    placeholder="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="newPassword"
                    secureTextEntry={passwordVisibility}
                    value={password}
                    enablesReturnKeyAutomatically
                    onChangeText={text => setPassword(text)}
                />
                <Pressable style={tw`absolute right-4 opacity-20 top-20`} onPress={handlePasswordVisibility}>
                    <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
                </Pressable>
            </View>
            <View style={tw`w-full`}>
                <Text style={tw`absolute right-0 text-[12px] mt-4 opacity-60`}>Recovery Password</Text>
            </View>
            <View style={tw`mt-20 bg-red-400 py-2 text-white rounded-lg shadow-xl shadow-red-900`}>
                <Button
                    title="Sign in"
                    color={'#fff'}
                    onPress={() => login(email, password)}
                />
            </View>
            <View>
                <View style={tw`border-t border-gray-300 mt-14 `}>
                    <Text style={tw`bg-[#F2F2F2] text-[12px] relative bottom-[8px] text-gray-500 w-32 mx-auto text-center`}> Or continue with </Text>
                </View>
                <View style={tw`flex flex-row gap-x-1 mx-auto mt-8`}>
                    <View style={tw`border-2 border-white px-5 pt-4 rounded-lg`}>
                        <Image style={tw`object-cover h-6 w-6 flex mx-auto align-center`} source={require('../../assets/Icons/iconGoogle.png')} />
                    </View>
                    <View style={tw`mx-8 raltive bottom-3 border-2 border-white px-5 py-2 rounded-lg`}>
                        <Image style={tw`object-cover h-9 w-9 relative flex mx-auto align-center`} source={require('../../assets/Icons/iconApple.png')} />
                    </View>
                    <View style={tw`border-2 border-white px-5 pt-4 rounded-lg`}>
                        <Image style={tw`object-cover h-5 w-8 flex mx-auto align-center`} source={require('../../assets/Icons/iconMeta.png')} />
                    </View>
                </View>
            </View>
            <View style={tw`mt-14 mx-auto flex flex-row`}>
                <Text style={tw`text-[12px]`}>Not a member?</Text>
                <TouchableOpacity onPress={() => Navigation.navigate('registerScreen')}>
                    <Text style={tw`text-[12px] text-blue-500`}>  Register now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default loginScreen