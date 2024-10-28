import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import { style } from './style';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Menu from '../../components/menu/menu';
import InputTarefa from '../../components/inputTarefa/inputTarefa';

export default TelaTarefas = () => {
    return (
        <View style={style.view}>
            <Image
                source={require('../../../assets/nome_icmc.png')}
                style={style.image}
            />
            <TouchableOpacity onPress={Menu}>
                <Entypo
                    name='menu'
                    size={30}
                    color='#0400AA'
                    style={style.menuIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={1}>
                <AntDesign
                    name='pluscircle'
                    size={48}
                    color= '#0600FF'
                    style={style.plusIcon}
                />
            </TouchableOpacity>

            <InputTarefa/>         
            


        </View>
    );
}
  