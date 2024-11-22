import React, {useState} from "react";
import { Alert, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";
import AuthServices from "../../services/AuthServices";



export default function ButtonLogin({login, password, navigation}) {
    const onPressLogin = async (login, password) =>{
        const isLogged = await AuthServices.loginUser(login, password);
        if(isLogged) navigation.navigate('TelaTarefas');
        else Alert.alert("Usuário ou senha estão incorretos")
    }

    return(
        <View>
            <TouchableOpacity onPress={() => onPressLogin(login, password)} style={styles.button}><Text style={styles.letra}>Login</Text></TouchableOpacity>
        </View>
    );
}