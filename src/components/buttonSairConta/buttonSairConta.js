import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './style'
import AuthServices from "../../services/AuthServices";

export default ButtonSairConta = ({navigation}) => {
    const sairConta = () => {
        //await AuthServices.logoutUser()
        navigation.navigate('TelaLogin')
    };
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={() => sairConta()}>
                <Text style={styles.text}>Sair</Text>
            </TouchableOpacity>
        </View>
       
    );
}