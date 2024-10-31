import React from "react";
import { Alert, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";

export default function ButtonCreateAccount({navigation}){
    function onPressCadastro(){
        navigation.navigate('TelaCadastro');
    }
    return(
        <View>
            <TouchableOpacity onPress={onPressCadastro} style={styles.button}><Text style={styles.letra}>Criar Conta</Text></TouchableOpacity>
        </View>
    );
}