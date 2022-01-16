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

export default function Register(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Cadastrar</Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Nome"
                    label="Nome"
                />
                <Input
                    placeholder="Email"
                    label="Email"
                    style={styles.input}
                />
                <Input
                    placeholder="Senha"
                    label="Senha"
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Input
                    placeholder="Confirmar Senha"
                    label="Confirmar Senha"
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Button
                    title="Cadastrar"
                    buttonStyle={styles.confirm}
                    onPress={() => props.navigation.navigate("Home")}
                />
                <Button
                    title="Voltar"
                    buttonStyle={styles.cancel}
                    onPress={() => props.navigation.navigate('Home')}
                />
            
            </View>
        </View>
    );
}