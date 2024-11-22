import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import ButtonDeletarConta from "../buttonDeletarConta/buttonDeletarConta";
import ButtonCancelarDeletar from "../buttonCancelarDeletar/buttonCancelarDeletar";
import InputPasswordPopup from "../inputPasswordPopup/inputPasswordPopup";

export default PopupDeletarConta = ({navigation,handle}) => {
    const [password, setPassword] = React.useState("");
    return(
        <View style={styles.view}>
            <Text style={styles.text}>Tem certeza que deseja</Text>
            <Text style={styles.text1}> deletar a sua conta?</Text>
            <InputPasswordPopup password={password} setPassword={setPassword}/>
            <ButtonDeletarConta navigation={navigation} password={password}/>
            <ButtonCancelarDeletar navigation={navigation} handle={handle}/>
        </View>
    );
}