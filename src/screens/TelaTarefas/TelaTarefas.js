import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import { style } from './style';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import BarraMenu from '../../components/BarraMenu/BarraMenu'; 
import InputTarefa from '../../components/inputTarefa/inputTarefa';
import PopupTarefa from '../../components/popupTarefa/popupTarefa';

export default TelaTarefas = ({navigation}) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [popupTarefasVisible, setPopupTarefasVisible] = useState(false);

    const fecharMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const trocarPopupTarefas = () => {
        setPopupTarefasVisible(!popupTarefasVisible);
    };

    return (
        <View style={style.view}>
            <Image
                source={require('../../../assets/nome_icmc.png')}
                style={style.image}
            />
            
            <TouchableOpacity onPress={fecharMenu}>
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
                onRequestClose={fecharMenu}
            >
                <BarraMenu navigation={navigation} menuClose={fecharMenu}/>
            </Modal>

            

            <TouchableOpacity style={style.plusIcon} onPress={trocarPopupTarefas}>
                <AntDesign
                    name='pluscircle'
                    size={48}
                    color= '#0600FF'
                />
            </TouchableOpacity>
            <Modal
                visible={popupTarefasVisible}
                transparent={true}
                onRequestClose={trocarPopupTarefas}
            >   
                <PopupTarefa handle={trocarPopupTarefas}/>
                <TouchableOpacity style={{width: 393, height: 917, position: 'absolute', backgroundColor: '#000000', opacity: 0.3}} onPress={trocarPopupTarefas}/>
            </Modal>

            <InputTarefa/>         
            


        </View>
    );
}
  