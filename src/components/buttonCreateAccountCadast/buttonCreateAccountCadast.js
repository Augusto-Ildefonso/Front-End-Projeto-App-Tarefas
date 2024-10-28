import React from "react";
import { Alert, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";
import { font_styles } from "../../../assets/fonts/style";

export default function ButtonCreateAccountCadast({navigation}){
    function onPressCriar(){
        navigation.navigate('TelaLogin');
    }
    return(
        <View>
            <TouchableOpacity onPress={onPressCriar} style={styles.button}><Text style={styles.letra}>Criar Conta</Text></TouchableOpacity>
        </View>
    );
}