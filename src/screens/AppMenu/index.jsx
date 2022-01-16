import React from "react";
import {
    Text,
    View,
    Icon
} from "react-native";
import {
    Button,
    Input,
} from "react-native-elements";
import { styles } from "./styles";


export default function AppMenu(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Menu</Text>
            <Button 
                title="Listas"
                buttonStyle={styles.confirm}
                onPress={() => props.navigation.navigate("Lists")}
            />
            <Button 
                title="Compras Finalizadas"
                buttonStyle={styles.confirm}
                onPress={() => props.navigation.navigate("AppMenuNavigator")}
            />
            <Button 
                title="Sair"
                buttonStyle={styles.cancel}
                onPress={() => props.navigation.navigate("Home")}
            />
        </View>
    );
}