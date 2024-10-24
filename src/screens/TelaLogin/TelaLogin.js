import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import InputEmail from '../../components/inputEmail/inputEmail';
import InputPassword from '../../components/inputPassword/inputPassword';
import ButtonLogin from '../../components/buttonLogin/buttonLogin';
import ButtonCreateAccount from '../../components/buttonCreateAccount/buttonCreateAccount';
import { style } from './style';
import { AiFillFacebook } from "react-icons/ai";

export default TelaLogin = () => {
    return (
        <View style={style.view}>
            <Image
                style={style.logo}
                source={require('../../../assets/logo_icmc.png')}
            />
            <Image
                style={style.nome}
                source={require('../../../assets/nome_icmc.png')}
            />
            <InputEmail/>
            <InputPassword/>
            <ButtonLogin/>
            <Text style={style.text}>ou</Text>
            <ButtonCreateAccount/>

            <View style={style.rodape}>
               <AiFillFacebook />
            </View>


        </View>
    );
}
  