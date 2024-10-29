import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import Antdesign  from 'react-native-vector-icons/AntDesign';
import {style} from './style'
import InputCPFAlterar from '../../components/inputCPFAlterar/inputCPFAlterar';
import InputEmailAlterar from '../../components/inputEmailAlterar/inputEmailAlterar';
import InputEmailConfirmarAlterar from '../../components/inputEmailConfirmarAlterar/inputEmailConfirmarAlterar';
import InputNomeAlterar from '../../components/inputNomeAlterar/inputNomeAlterar';
import InputDataAlterar from '../../components/inputDataAlterar/inputDataAlterar';
import InputPasswordAntigaAlterar from '../../components/inputPasswordAntigaAlterar/inputPasswordAntigaAlterar';
import InputPasswordCadastroAlterar from '../../components/inputPasswordCadastroAlterar/inputPasswordCadastroAlterar';
import InputPasswordCadastroConfAlterar from '../../components/inputPasswordCadastroConfAlterar/inputPasswordCadastroConfAlterar';
import ButtonAlterarDados from '../../components/buttonAlterarDados/buttonAlterarDados';

export default TelaAlterar = ({navigation}) => {
    function voltarTela(){
        navigation.navigate('TelaTarefas');
    }
    return (
        <View>
            <TouchableOpacity onPress={voltarTela} style={style.backbutton}>
                <Antdesign
                    name="left"
                    size={30}
                    color={'#0400AA'}
                />
            </TouchableOpacity>

            <Image
                style={style.nome}
                source={require('../../../assets/nome_icmc.png')}
            />
            <InputCPFAlterar/>
            <InputEmailAlterar/>
            <InputEmailConfirmarAlterar/>
            <InputNomeAlterar/>
            <InputDataAlterar/>
            <InputPasswordAntigaAlterar/>
            <InputPasswordCadastroAlterar/>
            <InputPasswordCadastroConfAlterar/>
            <ButtonAlterarDados navigation={navigation}/>
        </View>
    );
}