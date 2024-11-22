import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
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
import axios from "axios";
import AuthServices from "../../services/AuthServices";
import {SafeAreaView} from "react-native-safe-area-context";

export default TelaAlterar = ({navigation}) => {
    const [cpf, setCpf] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [emailConfirmar, setEmailConfirmar] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [data, setData] = React.useState('');
    const [oldPassword, setOldPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [passwordConfirmar, setPasswordConfirmar] = React.useState('');

    return (
        <SafeAreaView style={{backgroundColor: '#EEEEEE'}}>
            <KeyboardAvoidingView style={style.view} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('TelaTarefas')} style={style.backbutton}>
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
                    <InputCPFAlterar cpf={cpf} setCpf={setCpf}/>
                    <InputEmailAlterar email={email} setEmail={setEmail} />
                    <InputEmailConfirmarAlterar email={emailConfirmar} setEmail={setEmailConfirmar} />
                    <InputNomeAlterar nome={nome} setNome={setNome} />
                    <InputDataAlterar data={data} setData={setData} />
                    <InputPasswordAntigaAlterar password={oldPassword} setPassword={setOldPassword} />
                    <InputPasswordCadastroAlterar password={newPassword} setPassword={setNewPassword} />
                    <InputPasswordCadastroConfAlterar password={passwordConfirmar} setPassword={setPasswordConfirmar} />
                    <ButtonAlterarDados navigation={navigation} cpf={cpf} email={email} emailconfirmar={emailConfirmar} nome={nome} data={data} oldpassword={oldPassword} newpassword={newPassword} passwordConf={passwordConfirmar} />
                    <View style={{ height: 60 }} />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}