import React from "react";
import { styles } from "./style";
import { TouchableOpacity, Text } from "react-native";

export default ButtonSalvar = ({handle}) => {
    return(
        <TouchableOpacity style={styles.button} onPress={handle}>
            <Text style={styles.text}>Salvar</Text>
        </TouchableOpacity>
    );
};