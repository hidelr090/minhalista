import React, {useState} from 'react';
import {
    Text,
    View
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import { styles } from './styles';

export default function Home (props) {

    const [eyeOpen, setEyeOpen] = useState(true);
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Fazer Login</Text>
            <Input
                placeholder="Email"
                label="Login"
                containerStyle={styles.input}
                onChangeText={(text) => setEmail(text)}
            />

            {
                eyeOpen ?
                    <Input
                    placeholder="Senha"
                    rightIcon={{ type: 'font-awesome', name: 'eye', onPress: () => setEyeOpen(!eyeOpen)  }}
                    containerStyle={styles.input}
                    secureTextEntry={true}
                    onChangeText={(pass) => setPass(pass)}
                    label="Senha"
                    />
                    :
                    <Input
                    placeholder="Senha"
                    rightIcon={{ type: 'font-awesome', name:'eye-slash', onPress: () => setEyeOpen(!eyeOpen) }}
                    containerStyle={styles.input}
                    secureTextEntry={false}
                    onChangeText={(pass) => setPass(pass)}
                    label="Senha"
                    />
            }
            <Button 
                title="Confirmar"
                buttonStyle={styles.confirm}
                onPress={() => props.navigation.navigate("AppMenuNavigator")}
            />
            <Button
                title="Cancelar"
                buttonStyle={styles.cancel}
                onPress={() => props.navigation.navigate('Home')}
            />
        </View>
    );
}