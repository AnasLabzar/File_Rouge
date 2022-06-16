import { Button, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const ButtonDemoPage = () => {
  const Navigation = useNavigation();
  return (
    <View>
      <View
        style={tw`bg-[#ddc09e] mx-8 py-2 items-center rounded-lg mt-10 h-12`}
      >
        <Text
          style={tw`text-lg text-center font-medium w-full h-full `}
          onPress={() => Navigation.navigate("HomeScreen")}
        >
          Create in Account
        </Text>
      </View>
      <View style={tw`items-center rounded-lg mt-4 flex`}>
        <Text style={tw`text-md text-center font-medium  opacity-70`}>
          If you have in account
        </Text>
        <Text style={tw`text-md text-center font-medium underline mt-2 font-semibold`}>
          Sign in
        </Text>
      </View>
    </View>
  );
};

export default ButtonDemoPage;
