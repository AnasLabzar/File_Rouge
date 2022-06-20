import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const HeaderHome = () => {
  return (
    <View style={tw`w-full h-full mx-auto bg-[#F2F2F2]`}>
        <View style={tw`w-full max-h-full h-62 bg-blue-900 px-4  z-0 rounded-b-3xl rounded-t-lg`}>
            <View style={tw`w-full h-1/2 mx-auto bg-white z-1`}></View>
        </View>
    </View>
  )
}

export default HeaderHome