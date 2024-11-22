import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import ButtonSairConta from "../buttonSairConta/buttonSairConta";
import ButtonCancelar from "../buttonCancelar/buttonCancelar";

export default PopupSairConta = ({navigation, handle}) => {
    return(
        <View style={styles.view}>
            <Text style={styles.text}>Tem certeza que deseja</Text>
            <Text style={styles.text1}> sair da sua conta?</Text>
            <ButtonSairConta navigation={navigation}/>
            <ButtonCancelar handle={handle}/>
        </View>
    );
}