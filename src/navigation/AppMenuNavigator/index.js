import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AppMenu from "../../screens/AppMenu";
import Lists from "../../screens/Lists";

export default function AppMenuNavigator(props) {
    return(
        <Stack.Navigator
            initialRouteName="AppMenu"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="AppMenu"
                component={AppMenu}
                title="AppMenu"
            />
            <Stack.Screen
                name="Lists"
                component={Lists}
                title="Lists"
            />
        </Stack.Navigator>
    );
}