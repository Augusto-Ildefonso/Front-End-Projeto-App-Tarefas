import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import InputEmail from '../../components/inputEmail/inputEmail';
import InputPassword from '../../components/inputPassword/inputPassword';
import ButtonLogin from '../../components/buttonLogin/buttonLogin';
import ButtonCreateAccount from '../../components/buttonCreateAccount/buttonCreateAccount';

export default TelaLogin = () => {
    return (
        <View style={style.view}>
            <Image
                style={style.logo}
                source={require('../../../assets/logo_icmc.jpg')}
            />
            <Image
                style={style.nome}
                source={require('../../../assets/nome_icmc.jpg')}
            />
            <InputEmail/>
            <InputPassword/>
            <ButtonLogin/>
            <Text style={style.text}>ou</Text>
            <ButtonCreateAccount/>
        </View>
    );
}

const style = StyleSheet.create({
    text:{
        marginTop: 4,
        marginLeft: 186,
        color: '#424242',
    },
    view:{
        backgroundColor: '#EEEEEE',
        height: 971, // Arrumar melhor depois
    },
    logo:{
        width: 200,
        height: 200,
        marginTop: 35,
        marginLeft: 96.5,
    },
    nome:{
        width: 161,
        height: 94,
        marginTop: 23,
        marginLeft: 116,
    }
})
  