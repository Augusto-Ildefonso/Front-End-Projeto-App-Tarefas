import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
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
import {SafeAreaView} from "react-native-safe-area-context";

export default TelaCadastro = ({navigation}) => {
    const [cpf, setCpf] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [emailConfirmar, setEmailConfirmar] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [data, setData] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirmar, setPasswordConfirmar] = React.useState('');

    return (
        <SafeAreaView style={{backgroundColor: '#EEEEEE'}}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView>
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
                    <InputCPF style={style.cpf} cpf={cpf} setCpf={setCpf} />
                    <InputEmailCriarConta email={email} setEmail={setEmail} />
                    <InputEmailConfirmar email={emailConfirmar} setEmail={setEmailConfirmar} />
                    <InputNome nome={nome} setNome={setNome} />
                    <InputData data={data} setData={setData} />
                    <InputPasswordCadastro password={password} setPassword={setPassword} />
                    <InputPasswordCadastroConf password={passwordConfirmar} setPassword={setPasswordConfirmar} />
                    <ButtonCreateAccountCadast navigation={navigation} cpf={cpf} email={email} emailConf={emailConfirmar} nome={nome} data={data} password={password} passwordConf={passwordConfirmar}/>
                </ScrollView>
            </KeyboardAvoidingView>
            </SafeAreaView>
    );
}