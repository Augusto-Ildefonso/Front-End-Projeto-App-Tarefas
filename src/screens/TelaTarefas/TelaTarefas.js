import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import { style } from './style';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import BarraMenu from '../../components/BarraMenu/BarraMenu'; 
import InputTarefa from '../../components/inputTarefa/inputTarefa';

export default TelaTarefas = ({navigation}) => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <View style={style.view}>
            <Image
                source={require('../../../assets/nome_icmc.png')}
                style={style.image}
            />
            
            <TouchableOpacity onPress={() => setMenuVisible(true)}>
                <Entypo
                    name='menu'
                    size={30}
                    color='#0400AA'
                    style={style.menuIcon}
            />
            </TouchableOpacity>

            <Modal
                visible={menuVisible}
                transparent={true}
                onRequestClose={() => setMenuVisible(false)}
            >
                <BarraMenu navigation={navigation} menuClose={() => setMenuVisible(false)}/>
            </Modal>

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
  