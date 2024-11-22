import React from "react";
import { styles } from "./style";
import { TouchableOpacity, Text } from "react-native";
import axios from "axios";
import AuthServices from "../../services/AuthServices";

export default ButtonSalvarEdicao = ({name, date, time, description, status, handle}) => {
    const createTasks = async (name, date, time, description, status, handle) => {
        const user = await AuthServices.getUserData();
        const response = await axios.post('tasks/update', {
            id: '67407c986843162f37803d8d',
            email: user.login,
            name: name,
            date: date,
            time: time,
            description: description,
            status: status,
        }, {headers: {'Authorization': `Bearer ${user.token}`}})

        if(response) handle();
    }
    return(
        <TouchableOpacity style={styles.button} onPress={() => createTasks(name, date, time, description, status, handle)}>
            <Text style={styles.text}>Salvar</Text>
        </TouchableOpacity>
    );
};