import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import InputNomeTarefa from "../inputNomeTarefa/inputNomeTarefa";
import InputDataTarefa from "../inputDataTarefa/inputDataTarefa";
import InputHorário from "../inputHorario/inputHorario";
import InputDescricao from "../inputDescricao/inputDescricao";
import InputStatus from "../inputStatus/inputStatus";
import ButtonSalvar from "../buttonSalvar/buttonSalvar";
import Antdesign from 'react-native-vector-icons/AntDesign';

export default PopupTarefaEditar = ({handle}) => {
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
            <InputStatus />
            <ButtonSalvar handle={handle}/>
            <TouchableOpacity onPress={handle} style={styles.deleteIcon}>
                <Antdesign
                    name='delete'
                    size={24}
                    color={'#0600FF'}
                    
                />
            </TouchableOpacity>
            
        </View>
    );
}