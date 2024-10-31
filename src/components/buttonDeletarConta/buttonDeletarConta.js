import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './style'

export default ButtonDeletarConta = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaLogin')}>
                <Text style={styles.text}>Deletar</Text>
            </TouchableOpacity>
        </View>
       
    );
}