import React from "react";
import {
    Text,
    View,
    ScrollView,
} from "react-native";
import {
    Button,
    Input,
} from "react-native-elements";

import { styles } from "./styles";

export default function Lists (props) {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Listas</Text>
            <View style={styles.list}>
                <ScrollView style={{width:"100%"}}>
                    <View style={styles.listsView}>
                        <Text style={styles.listText}>Lista de Compras do dia 2020</Text>
                        <Button
                            icon={{
                                type: "font-awesome",
                                name: "pencil",
                                size: 15,
                                color: "#fff",
                            }}
                            type="outline"
                            buttonStyle={styles.button}
                        />
                        <Button
                            icon={{
                                type: "font-awesome",
                                name: "arrow-right",
                                size: 15,
                                color: "#fff",
                            }}
                            type="outline"
                            buttonStyle={styles.button}
                        />
                    </View>
                    <View style={styles.listsView}>
                        <Text style={styles.listText}>Lista de Compras do dia 2020</Text>
                        <Button
                            icon={{
                                type: "font-awesome",
                                name: "pencil",
                                size: 15,
                                color: "#fff",
                            }}
                            type="outline"
                            buttonStyle={styles.button}
                        />
                        <Button
                            icon={{
                                type: "font-awesome",
                                name: "arrow-right",
                                size: 15,
                                color: "#fff",
                            }}
                            type="outline"
                            buttonStyle={styles.button}
                        />
                    </View>
                    <View style={styles.listsView}>
                        <Text style={styles.listText}>Lista de Compras do dia 2020</Text>
                        <Button
                            icon={{
                                type: "font-awesome",
                                name: "pencil",
                                size: 15,
                                color: "#fff",
                            }}
                            type="outline"
                            buttonStyle={styles.button}
                        />
                        <Button
                            icon={{
                                type: "font-awesome",
                                name: "arrow-right",
                                size: 15,
                                color: "#fff",
                            }}
                            type="outline"
                            buttonStyle={styles.button}
                        />
                    </View>
                    <View style={styles.listsView}>
                        <Text style={styles.listText}>Lista de Compras do dia 2020</Text>
                        <Button
                            icon={{
                                type: "font-awesome",
                                name: "pencil",
                                size: 15,
                                color: "#fff",
                            }}
                            type="outline"
                            buttonStyle={styles.button}
                        />
                        <Button
                            icon={{
                                type: "font-awesome",
                                name: "arrow-right",
                                size: 15,
                                color: "#fff",
                            }}
                            type="outline"
                            buttonStyle={styles.button}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.bot}>
                <Button
                    title="Nova Lista"
                    buttonStyle={styles.confirm}
                    onPress={() => props.navigation.navigate("Lists")}
                />
                <Button
                    title="Voltar"
                    buttonStyle={styles.cancel}
                    onPress={() => props.navigation.navigate("AppMenu")}
                />
            </View>
        </View>
    );
}