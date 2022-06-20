import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const AuthScreen = () => {

  const Navigation = useNavigation();

  return (
    <SafeAreaView style={tw`mx-3`}>
      <View style={tw`bg-blue-200 mt-4 rounded-2xl py-20`}>
        <Image style={tw`object-cover h-56 w-70 flex mx-auto align-center`} source={require('../../assets/Images/vectorLogin.png')} />
      </View>
      <View style={tw`px-8`}>
        <Text style={tw`font-bold mt-18 text-2xl text-center`}>
          Discover Your{'\n'}Library App Here
        </Text>
        <Text style={tw`mt-4 text-[12px] opacity-40 font-semibold text-center leading-5`}>
          Explore all books digitally and on your phone only based on your interests and specialization
        </Text>
      </View>
      <View style={tw`flex flex-row row-col-2 mx-auto mt-20 pr-3`}>
        <View style={tw`bg-white text-white rounded-lg px-4 py-2 text-white relative left-4 px-10 px-4 z-1`}>
          <Button
            // onPress={onPressLearnMore}
            title="Register"
            accessibilityLabel="Learn more about this purple button"
            color={"#000"}
            onPress={() => Navigation.navigate('registerScreen')}
          />
        </View>
        <View style={tw`bg-[#ffffff4d] rounded-lg px-4 py-2 px-10 px-4 z-0 border-2 border-white`}>
          <Button
            // onPress={onPressLearnMore}
            title="Sign in"
            accessibilityLabel="Learn more about this purple button"
            color={"#000"}
            size="lg"
            onPress={() => Navigation.navigate('loginScreen')}
          />
        </View>

      </View>
    </SafeAreaView>
  )
}

export default AuthScreen