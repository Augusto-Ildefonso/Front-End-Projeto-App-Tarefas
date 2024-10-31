import React from "react";
import { Alert, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";

export default function ButtonLogin({navigation}){
    function onPressLogin(){  
        navigation.navigate('TelaTarefas'); // Ajuste o nome da tela conforme necessário
    }
    return(
        <View>
            <TouchableOpacity onPress={onPressLogin} style={styles.button}><Text style={styles.letra}>Login</Text></TouchableOpacity>
        </View>
    );
}