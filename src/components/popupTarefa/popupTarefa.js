import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import InputNomeTarefa from "../inputNomeTarefa/inputNomeTarefa";
import InputDataTarefa from "../inputDataTarefa/inputDataTarefa";
import InputHorário from "../inputHorario/inputHorario";
import InputDescricao from "../inputDescricao/inputDescricao";
import InputStatus from "../inputStatus/inputStatus";
import ButtonSalvar from "../buttonSalvar/buttonSalvar";

export default PopupTarefa = ({handle}) => {
    return(
        <View style={styles.caixa}>
            <Text style={styles.nomeTarefa}>Nome da Tarefa</Text>
            <InputNomeTarefa/>
            <Text style={styles.data}>Data de Entrega</Text>
            <InputDataTarefa/>
            <Text style={styles.horario}>Horário</Text>
            <InputHorário/>
            <Text style={styles.descricao}>Descrição</Text>
            <InputDescricao/>
            <Text style={styles.status}>Status</Text>
            <InputStatus/>
            <ButtonSalvar handle={handle}/>
        </View>
    );
}