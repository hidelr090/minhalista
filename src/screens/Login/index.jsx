import React, {useState} from 'react';
import {
    Text,
    View
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import { styles } from './styles';

export default function Home (props) {

    const [eyeOpen, setEyeOpen] = useState(true);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Fazer Login</Text>
            <Input
                placeholder="Email"
                containerStyle={styles.input}
            />

            {
                eyeOpen ?
                    <Input
                    placeholder="Senha"
                    rightIcon={{ type: 'font-awesome', name: 'eye', onPress: () => setEyeOpen(!eyeOpen)  }}
                    containerStyle={styles.input}
                    secureTextEntry={true}
                    />
                    :
                    <Input
                    placeholder="Senha"
                    rightIcon={{ type: 'font-awesome', name:'eye-slash', onPress: () => setEyeOpen(!eyeOpen) }}
                    containerStyle={styles.input}
                    secureTextEntry={false}
                    />
            }
            <Button 
                title="Confirmar"
                buttonStyle={styles.confirm}
            />
            <Button
                title="Cancelar"
                buttonStyle={styles.cancel}
                onPress={() => props.navigation.navigate('Home')}
            />
        </View>
    );
}