import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import DemoScreen from "./screens/DemoScreen";
import HomeScreen from "./screens/HomeScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import { store } from "./store";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="DemoScreen"
            component={DemoScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
        {/* <DemoScreen /> */}
      </NavigationContainer>
    </Provider>
  );
}