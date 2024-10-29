import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import Antdesign  from 'react-native-vector-icons/AntDesign';
import {style} from './style'
import InputEmailCriarConta from '../../components/inputEmailCriarConta/inputEmailCriarConta';
import InputEmailConfirmar from '../../components/inputEmailConfirmar/inputEmailConfirmar';
import InputNome from '../../components/inputNome/inputNome';
import InputData from '../../components/inputData/inputData';
import InputPasswordCadastro from '../../components/inputPasswordCadastro/inputPasswordCadastro';
import InputPasswordCadastroConf from '../../components/inputPasswordCadastroConf/inputPasswordCadastroConf';
import InputCPF from '../../components/inputCPF/inputCPF';
import ButtonCreateAccountCadast from '../../components/buttonCreateAccountCadast/buttonCreateAccountCadast';

export default TelaCadastro = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity style={style.backbutton} onPress={() => navigation.navigate('TelaLogin')}>
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
            <InputCPF
                style={style.cpf}
            />
            <InputEmailCriarConta/>
            <InputEmailConfirmar/>
            <InputNome/>
            <InputData/>
            <InputPasswordCadastro/>
            <InputPasswordCadastroConf/>
            <ButtonCreateAccountCadast navigation={navigation}/>
        </View>
    );
}