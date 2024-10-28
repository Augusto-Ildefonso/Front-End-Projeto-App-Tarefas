import React from "react";
import { Alert, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";
import { font_styles } from "../../../assets/fonts/style";

export default function ButtonCreateAccountCadast(){
    function onPressLogin(){
        Alert.alert("Conta criada");
    }
    return(
        <View>
            <TouchableOpacity onPress={onPressLogin} style={styles.button}><Text style={styles.letra}>Criar Conta</Text></TouchableOpacity>
        </View>
    );
}