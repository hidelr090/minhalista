import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8ff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
    },
    confirm: {
        backgroundColor: 'green',
        color: '#000',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        width: 200,
        textAlign: 'center',
    },
    cancel: {
        backgroundColor: '#f44336',
        color: '#000',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        width: 200,
        textAlign: 'center',
    },
    text: {
        fontSize: 20,
        color: '#000',
        marginBottom: 50,
    },
    input:{
        padding: 5,
        marginBottom: 5,
        width: 300,
    }
});