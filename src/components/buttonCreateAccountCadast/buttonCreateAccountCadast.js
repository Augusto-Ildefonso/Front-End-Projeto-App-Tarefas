import React from "react";
import { Alert, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";
import axios from "axios";
import convertData from "../../utils/convertData";

export default function ButtonCreateAccountCadast({navigation, cpf, email, emailConf, nome, data, password, passwordConf}){
    const onPressCriar = async (cpf, email, emailConf, nome, data, password, passwordConf) => {
        const date = convertData(data)
        if(email === emailConf && password === passwordConf){
            const user = await axios.post('/users/create', {cpf: cpf, email: email, name: nome, date: date, password: password});

            if(user) navigation.navigate('TelaLogin');
        } else{
            Alert.alert("Os emails ou as senhas estão diferentes");
        }
    }
    return(
        <View>
            <TouchableOpacity onPress={() => onPressCriar(cpf, email, emailConf, nome, data, password, passwordConf)} style={styles.button}><Text style={styles.letra}>Criar Conta</Text></TouchableOpacity>
        </View>
    );
}