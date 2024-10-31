import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { useState } from "react";
import { styles } from "./style";

export default ButtonCancelarDeletar = ({handle}) => {
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={handle}>
                <Text style={styles.text}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
}