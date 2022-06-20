import React, { useContext, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import tw from 'twrnc'
import { AuthContext } from '../../Context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const registerScreen = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const {isLoading, register} = useContext(AuthContext);

    return (
        <View style={tw`mt-30 mx-8`}>
            <Spinner visible={isLoading} />
            <View style={tw`flex mx-auto`}>
                <Text style={tw`text-center opacity-70 text-3xl font-semibold`}>Hello To E-Book!</Text>
                <Text style={tw`text-center text-xl opacity-40 mt-6`}>Wellcome back you've{'\n'}been missed!</Text>
            </View>
            <View style={tw`flex text-center mt-10`}>
                <TextInput
                    style={tw`w-full bg-white py-4 px-5 rounded-lg`}
                    placeholder="Enter username"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    style={tw`w-full bg-white py-4 px-5 rounded-lg my-4`}
                    placeholder="Enter Email Adresse"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={tw`w-full bg-white py-4 px-5 rounded-lg `}
                    value={password}
                    placeholder="password"
                    secureTextEntry
                    onChangeText={text => setPassword(text)}
                />
                <View style={tw`mt-20 bg-red-400 py-2 text-white rounded-lg shadow-xl shadow-red-900`}>
                    <Button
                        title="Register now"
                        color={'#fff'}
                        onPress={() => register(name, email, password)}
                    />
                </View>
            </View>
        </View>
    )
}

export default registerScreen