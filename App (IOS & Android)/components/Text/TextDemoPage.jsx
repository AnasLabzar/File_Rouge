import {  Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';


const TextDemoPage = () => {
  return (
    <View>
      <Text style={tw`text-lg text-center mt-10 font-semibold`}>History of World Book Day{"\n"}World Book Day</Text>
      <Text style={tw`text-center mt-5 px-4`}>Reading is a stellar form of entertainment and it requires that you use your imagination rather than simply watching visuals on a screen. There is also something so therapeutic about the actual feel of a book, with its scent of printed pages and glossy covers. Books are a valuable aspect ...</Text>
    </View>
  )
}

export default TextDemoPage;