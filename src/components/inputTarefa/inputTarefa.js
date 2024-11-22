import React from 'react';
import { View, TextInput, Alert } from 'react-native';
import { styles } from './style';
import AuthServices from "../../services/AuthServices";
import axios from "axios";

export default function InputTarefa() {
    const [text, onChangeText] = React.useState();

    const createTasks = async (text) => {
        const user = await AuthServices.getUserData();
        const response = await axios.post('tasks/create', {
            email: user.login,
            name: text,
        }, {headers: {'Authorization': `Bearer ${user.token}`}})

        if(response) onChangeText('');
    }

    const onKeyPress = async () => {
        console.log(text);
        await createTasks(text);
    }

    return (
        <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            value={text}
            placeholder={'Tarefa Rápida...'}
            placeholderTextColor={'#424242'}
            autoCapitalize='none'
            onSubmitEditing={onKeyPress}
            returnKeyType="done"
        />
    );
  }