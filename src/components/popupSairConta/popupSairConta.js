import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import InputPasswordPopup from "../inputPasswordPopup/inputPasswordPopup";

export default PopupSairConta = () => {
    return(
        <View style={styles.view}>
            <Text style={styles.text}>Tem certeza que deseja</Text>
            <Text style={styles.text1}> excluir a sua conta?</Text>
            <InputPasswordPopup/>
        </View>
    );
}