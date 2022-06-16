import { View, Image, Text } from 'react-native'
import React from 'react'
import LoginSVG from '../assets/Images/VectorLogin.jpg'
import tw from 'twrnc'

const AuthScreen = () => {
  return (
    <View style={tw`flex-1 justify-center align-center`}>
      <Image 
        source={LoginSVG} 
        style={tw`w-[100%] h-[50%] absolute top-0 mt-10` }
      />
      <Text>
        Discover your{"\n"}Dream App Book Here
      </Text>
    </View>
  )
}

export default AuthScreen