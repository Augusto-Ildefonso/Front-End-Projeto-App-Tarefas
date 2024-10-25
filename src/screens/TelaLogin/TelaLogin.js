import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import InputEmail from '../../components/inputEmail/inputEmail';
import InputPassword from '../../components/inputPassword/inputPassword';
import ButtonLogin from '../../components/buttonLogin/buttonLogin';
import ButtonCreateAccount from '../../components/buttonCreateAccount/buttonCreateAccount';
import { style } from './style';
import AntDesign from "react-native-vector-icons/AntDesign";

export default TelaLogin = () => {

    const OnPressFacebook = () => Linking.openURL('https://www.facebook.com/ICMCJunior/');

    const OnPressInstagram = () => Linking.openURL('https://www.instagram.com/icmcjunior/');

    const OnPressLinkedin = () => Linking.openURL('https://www.linkedin.com/company/icmcjunior/posts/?feedView=all');

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
                <TouchableOpacity style={style.primeiroElementoRodape} onPress={OnPressFacebook}>
                    <AntDesign
                        name="facebook-square"
                        size={40}
                        color={'#0400AA'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={style.meioElementoRodape} onPress={OnPressInstagram}>
                    <AntDesign
                        name="instagram"
                        size={40}
                        color={'#0400AA'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={style.ultimoElementoRodape} onPress={OnPressLinkedin}>
                    <AntDesign
                        name="linkedin-square"
                        size={40}
                        color={'#0400AA'}
                    />
                </TouchableOpacity>

                
            </View>


        </View>
    );
}
  