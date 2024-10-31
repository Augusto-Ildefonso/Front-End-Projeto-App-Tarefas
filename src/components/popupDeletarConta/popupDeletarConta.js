import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import ButtonDeletarConta from "../buttonDeletarConta/buttonDeletarConta";
import ButtonCancelarDeletar from "../buttonCancelarDeletar/buttonCancelarDeletar";
import InputPasswordPopup from "../inputPasswordPopup/inputPasswordPopup";

export default PopupDeletarConta = ({navigation}, {handle}) => {
    return(
        <View style={styles.view}>
            <Text style={styles.text}>Tem certeza que deseja</Text>
            <Text style={styles.text1}> deletar a sua conta?</Text>
            <InputPasswordPopup/>
            <ButtonDeletarConta navigation={navigation}/>
            <ButtonCancelarDeletar navigation={navigation} handle={handle}/>
        </View>
    );
}