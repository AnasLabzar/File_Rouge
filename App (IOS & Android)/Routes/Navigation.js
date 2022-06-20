import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import registerScreen from '../screens/Auth/registerScreen'
import loginScreen from '../screens/Auth/loginScreen'
import AuthScreen from '../screens/Auth/AuthScreen'
import OnboardingScreen from '../screens/OnboardingScreen'
import DemoScreen from '../screens/DemoScreen'
import HomeScreen from '../screens/HomeScreen'
import { AuthContext } from '../Context/AuthContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {userInfo.token ? (
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />

      ) : (
        <>
          <Stack.Screen
            name="AuthScreen"
            component={AuthScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="loginScreen"
            component={loginScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="registerScreen"
            component={registerScreen}
            options={{
              headerShown: false
            }}
          />
        </>
      )
      }
      {/* <Stack.Screen
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
          */
      }
    </Stack.Navigator>
  )
}

export default Navigation