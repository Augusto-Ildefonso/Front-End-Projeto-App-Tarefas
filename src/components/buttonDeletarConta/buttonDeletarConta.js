import React from "react";
import {View, Text, TouchableOpacity, Alert} from "react-native";
import { styles } from './style'
import axios from "axios";
import AuthServices from "../../services/AuthServices";

export default ButtonDeletarConta = ({navigation, password}) => {
    const onPressDelete = async (password) => {
        const user = await AuthServices.getUserData();
        if (password === user.password) {
            console.log(user)
            const response = await axios.delete(`/users/delete/${user.login}`, {}, {headers: {'Authorization': `Bearer ${user.token}`}});
            if(response) navigation.navigate('TelaLogin')
        } else {
            Alert.alert('Senha errada')
        }
    }
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={() => onPressDelete(password)}>
                <Text style={styles.text}>Deletar</Text>
            </TouchableOpacity>
        </View>
       
    );
}