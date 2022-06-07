import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import DemoScreen from "./screens/DemoScreen";
import HomeScreen from "./screens/HomeScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <DemoScreen />
      {/* <OnboardingScreen /> */}
    </Provider>
  );
}