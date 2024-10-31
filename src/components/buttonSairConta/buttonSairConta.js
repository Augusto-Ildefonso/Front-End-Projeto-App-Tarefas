import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './style'

export default ButtonSairConta = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaLogin')}>
                <Text style={styles.text}>Sair</Text>
            </TouchableOpacity>
        </View>
       
    );
}