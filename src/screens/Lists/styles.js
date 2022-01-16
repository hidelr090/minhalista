import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8ff",
        alignItems: "center",
        justifyContent: "center",
        color: "#000",
    },
    list:{
        flex: 8,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.3,
        width: "100%",
    },
    bot:{
        flex: 2,
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
    },    
    confirm: {
        backgroundColor: "green",
        color: "#000",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        width: 150,
        height: 50,
        textAlign: "center",
    },
    cancel: {
        backgroundColor: "#f44336",
        color: "#000",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        width: 150,
        height: 50,
        textAlign: "center",
    },
    text: {
        fontSize: 20,
        color: "#000",
        marginTop: 50,
        marginBottom: 50,
    },
    listText:{
        fontSize: 20,
        color: "#000",
        marginTop: 10,
        marginBottom: 10,
        flex: 7,
    },
    input: {
        padding: 5,
        marginBottom: 5,
        width: "100%",
    },
    listsView: {
        width: "100%",
        backgroundColor: "#dcdcdc",
        paddingLeft: 20,
        flexDirection: "row",
        borderStyle: "solid",
        borderWidth: 0.3,
    },
    button:{
        backgroundColor: "#00bfff",
        color: "#fff",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        flex: 1,
    }
});
