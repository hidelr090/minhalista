import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";

export default function App () {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    title="Tela Inicial"
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    title="Login"
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
