import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { style } from './style';
import AntDesign from "react-native-vector-icons/AntDesign";

import Menu from '../../components/menu/menu';
import InputTarefa from '../../components/inputTarefa/inputTarefa';

export default TelaTarefas = () => {
    const mostrarMenu = () => {
        return <Menu navigation={navigation}/>
    }

    return (
        <View style={style.view}>
            <Image
                source={require('../../../assets/nome_icmc.png')}
                style={style.image}
            />
            
            <Menu />

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
  