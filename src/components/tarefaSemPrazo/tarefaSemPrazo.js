import React from 'react';
import {View, TouchableOpacity, Text, Modal} from 'react-native';
import { styles } from './style';
import PopupTarefaEditar from "../popupTarefaEditar/popupTarefaEditar";

export default TarefaSemPrazo = ({handle, variavel}) => {
    return (
        <View style={styles.view}>
            <TouchableOpacity style={styles.container} onPress={handle}>
                <Text style={styles.text}>Tarefa Teste</Text>
                <Text style={styles.text}>11/11/2024</Text>
                <Text style={styles.text}>08:50</Text>
            </TouchableOpacity>
            <Modal
                visible={variavel}
                transparent={true}
                onRequestClose={handle}
            >
                <PopupTarefaEditar handle={handle}/>
                <TouchableOpacity style={{width: 393, height: 917, position: 'absolute', backgroundColor: '#000000', opacity: 0.3}} onPress={handle}/>
            </Modal>
        </View>
    )
}