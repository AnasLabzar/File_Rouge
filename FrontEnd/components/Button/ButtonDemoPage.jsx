import { Button, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const ButtonDemoPage = () => {
  return (
    <View>
      <View style={tw`bg-[#ddc09e] mx-8 py-2 items-center rounded-lg mt-10`}>
          <Text style={tw`text-lg text-center font-medium`}>Contunie</Text>
      </View>
      <View style={tw`items-center rounded-lg mt-4`}>
          <Text style={tw`text-md text-center font-medium underline `}>Read more about it</Text>
      </View>
    </View>
  );
};

export default ButtonDemoPage;
