import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './style'

export default ButtonSairConta = ({navigation, handle}) => {
    const sairConta = () => {
        handle();
        navigation.navigate('TelaLogin')
    };
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={sairConta}>
                <Text style={styles.text}>Sair</Text>
            </TouchableOpacity>
        </View>
       
    );
}