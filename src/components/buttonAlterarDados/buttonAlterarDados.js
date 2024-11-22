import React from "react";
import { Alert, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";
import AuthServices from "../../services/AuthServices";
import axios from "axios";
import convertData from "../../utils/convertData";

export default function ButtonAlterarDados({navigation, cpf, email, emailconfirmar, nome, data, oldpassword, newpassword, passwordConf}){
    const onPressCriar = async (cpf, email, emailconfirmar, nome, data, oldpassword, newpassword, passwordConf) => {
        const date = convertData(data)
        const user = await AuthServices.getUserData()

        if (emailconfirmar === email && newpassword === passwordConf) {
            const response = await axios.post('/users/update', {
                cpf: cpf,
                email: email,
                name: nome,
                date: date,
                password: oldpassword,
                newpassword: newpassword,
            },{
                headers: {'Authorization':  `Bearer ${user.token}`}
            });
            if (response) navigation.navigate('TelaTarefas');
        } else{
            Alert.alert("Os emails ou as senhas estão diferentes")
        }
    }
    return(
        <View>
            <TouchableOpacity onPress={() => onPressCriar(cpf, email, emailconfirmar, nome, data, oldpassword, newpassword, passwordConf)} style={styles.button}><Text style={styles.letra}>Alterar Dados</Text></TouchableOpacity>
        </View>
    );
}