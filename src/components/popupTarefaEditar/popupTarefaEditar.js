import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import InputNomeTarefa from "../inputNomeTarefa/inputNomeTarefa";
import InputDataTarefa from "../inputDataTarefa/inputDataTarefa";
import InputHorário from "../inputHorario/inputHorario";
import InputDescricao from "../inputDescricao/inputDescricao";
import InputStatus from "../inputStatus/inputStatus";
import ButtonSalvarEdicao from "../buttonSalvarEdicao/buttonSalvarEdicao";
import Antdesign from 'react-native-vector-icons/AntDesign';
import axios from "axios";
import AuthServices from "../../services/AuthServices";

export default PopupTarefaEditar = ({handle}) => {
    const [status, setStatus] = React.useState('#B6B6B6')
    const [date, setDate] = React.useState()
    const [name, setName] = React.useState()
    const [time, setTime] = React.useState()
    const [description, setDescription] = React.useState()

    const deleteTask = async (name) => {
        const user = await AuthServices.getUserData();
        console.log(user, name)
        const response = await axios.delete(`/tasks/delete/${user.login}`, {data:{name: name}}, {headers: {'Authorization': `Bearer ${user.token}`}});
        if(response) handle();
    }

    return(
        <View style={styles.caixa}>
            <Text style={styles.nomeTarefa}>Nome da Tarefa</Text>
            <InputNomeTarefa name={name} setName={setName}/>
            <Text style={styles.data}>Data de Entrega</Text>
            <InputDataTarefa date={date} setDate={setDate}/>
            <Text style={styles.horario}>Horário</Text>
            <InputHorário time={time} setTime={setTime}/>
            <Text style={styles.descricao}>Descrição</Text>
            <InputDescricao description={description} setDescription={setDescription}/>
            <Text style={styles.status}>Status</Text>
            <InputStatus status={status} setStatus={setStatus}/>
            <ButtonSalvarEdicao status={status} date={date} name={name} time={time} description={description} handle={handle}/>
            <TouchableOpacity onPress={() => deleteTask(name)} style={styles.deleteIcon}>
                <Antdesign
                    name='delete'
                    size={24}
                    color={'#0600FF'}
                    
                />
            </TouchableOpacity>
            
        </View>
    );
}