import React from "react";
import { Alert, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";

export default function ButtonAlterarDados({navigation}){
    function onPressCriar(){
        navigation.navigate('TelaTarefas');
    }
    return(
        <View>
            <TouchableOpacity onPress={onPressCriar} style={styles.button}><Text style={styles.letra}>Alterar Dados</Text></TouchableOpacity>
        </View>
    );
}