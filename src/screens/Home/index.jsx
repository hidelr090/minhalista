import React from 'react';
import {
    Text,
    View,
    Linking
} from 'react-native';
import {Button} from 'react-native-elements';
import { styles } from './styles';

export default function Home (props) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Minha Lista de Compra</Text>
            <Button
                title="Login"
                buttonStyle={styles.button}
                onPress={() => props.navigation.navigate('Login')}
            />
            <Button
                buttonStyle={styles.button}
                title="Cadastrar-se"
                onPress={() => props.navigation.navigate('Register')}
            />
        </View>
    );
}