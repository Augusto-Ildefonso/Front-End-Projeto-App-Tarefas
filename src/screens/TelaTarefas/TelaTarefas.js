import React from 'react';
import { useState } from 'react';
import {Text, Image, TouchableOpacity, Modal, Platform, KeyboardAvoidingView, View, ScrollView} from 'react-native';
import { style } from './style';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import BarraMenu from '../../components/BarraMenu/BarraMenu'; 
import InputTarefa from '../../components/inputTarefa/inputTarefa';
import PopupTarefa from '../../components/popupTarefa/popupTarefa';
import popupTarefaEditar from '../../components/popupTarefaEditar/popupTarefaEditar';
import {SafeAreaView} from "react-native-safe-area-context";
import TarefaAtrasada from "../../components/tarefaAtrasada/tarefaAtrasada";
import TarefaSemPrazo from "../../components/tarefaSemPrazo/tarefaSemPrazo";
import TarefaEmAndamento from "../../components/tarefaEmAndamento/tarefaEmAndamento";
import TarefaConcluida from "../../components/tarefaConcluida/tarefaConcluida";

export default TelaTarefas = ({navigation}) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [popupTarefasVisible, setPopupTarefasVisible] = useState(false);
    const [popupTarefasEditaVisible, setPopupTarefasEditaVisible] = useState(false);
    const [icon, setIcon] = useState('caretright');
    const [icon1, setIcon1] = useState('caretright');
    const [icon2, setIcon2] = useState('caretright');
    const [icon3, setIcon3] = useState('caretright');
    const [marginTopIcon, setMarginTopIcon] = useState(54);
    const [tarefaAtrasadaVisible, setTarefaAtrasadaVisible] = useState(false);
    const [tarefaSemPrazoVisible, setTarefaSemPrazoVisible] = useState(false);
    const [tarefaEmAndamentoVisible, setTarefaEmAndamentoVisible] = useState(false);
    const [tarefaConcluidaVisible, setTarefaConcluidaVisible] = useState(false);

    const fecharMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const trocarPopupTarefas = () => {
        setPopupTarefasVisible(!popupTarefasVisible);
    };

    const trocarPopupTarefasEditar = () => {
        setPopupTarefasEditaVisible(!popupTarefasEditaVisible);
    }

    const trocarTarefaAtrasada = () => {
        chanceIcon();
        setTarefaAtrasadaVisible(!tarefaAtrasadaVisible);
    }
    const trocarTarefaSemPrazo = () => {
        chanceIcon1();
        setTarefaSemPrazoVisible(!tarefaSemPrazoVisible);
    }
    const trocarTarefaEmAndamento = () => {
        chanceIcon2();
        setTarefaEmAndamentoVisible(!tarefaEmAndamentoVisible);
    }
    const trocarTarefaConcluida = () => {
        chanceIcon3();
        setTarefaConcluidaVisible(!tarefaConcluidaVisible);
    }

    const chanceIcon = () => {
        if (icon === 'caretright'){
            setIcon('caretdown');
            setMarginTopIcon(52);
        }
        if (icon === 'caretdown'){
            setIcon('caretright');
            setMarginTopIcon(54);
        }
    }

    const chanceIcon1 = () => {
        if (icon1 === 'caretright'){
            setIcon1('caretdown');
            setMarginTopIcon(52);
        }
        if (icon === 'caretdown'){
            setIcon1('caretright');
            setMarginTopIcon(54);
        }
    }

    const chanceIcon2 = () => {
        if (icon2 === 'caretright'){
            setIcon2('caretdown');
            setMarginTopIcon(52);
        }
        if (icon === 'caretdown'){
            setIcon2('caretright');
            setMarginTopIcon(54);
        }
    }

    const chanceIcon3 = () => {
        if (icon3 === 'caretright'){
            setIcon3('caretdown');
            setMarginTopIcon(52);
        }
        if (icon3 === 'caretdown'){
            setIcon3('caretright');
            setMarginTopIcon(54);
        }
    }

    return (
        <SafeAreaView style={{backgroundColor: '#EEEEEE'}}>
            <KeyboardAvoidingView style={style.view} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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

                <ScrollView style={style.areaTarefas}>
                    <TouchableOpacity onPress={trocarTarefaAtrasada}>
                        <AntDesign name={`${icon}`} color={'#0400AA'} size={28} marginTop={marginTopIcon} marginBottom={10}/>
                        <Text style={style.text}>Atrasadas</Text>
                    </TouchableOpacity>
                    {tarefaAtrasadaVisible && (
                        <TarefaAtrasada handle={trocarPopupTarefasEditar} variavel={popupTarefasEditaVisible}/>
                    )}
                    <View style={style.barra}></View>

                    <TouchableOpacity onPress={trocarTarefaSemPrazo}>
                        <AntDesign name={`${icon1}`} color={'#0400AA'} size={28} marginTop={marginTopIcon} marginBottom={10}/>
                        <Text style={style.text}>Sem Prazo</Text>
                    </TouchableOpacity>
                    {tarefaSemPrazoVisible && (
                        <TarefaSemPrazo handle={trocarPopupTarefasEditar} variavel={popupTarefasEditaVisible}/>
                    )}
                    <View style={style.barra}></View>

                    <TouchableOpacity onPress={trocarTarefaEmAndamento}>
                        <AntDesign name={`${icon2}`} color={'#0400AA'} size={28} marginTop={marginTopIcon} marginBottom={10}/>
                        <Text style={style.text}>Em andamento</Text>
                    </TouchableOpacity>
                    {tarefaEmAndamentoVisible && (
                        <TarefaEmAndamento handle={trocarPopupTarefasEditar} variavel={popupTarefasEditaVisible}/>
                    )}
                    <View style={style.barra}></View>

                    <TouchableOpacity onPress={trocarTarefaConcluida}>
                        <AntDesign name={`${icon3}`} color={'#0400AA'} size={28} marginTop={marginTopIcon} marginBottom={10}/>
                        <Text style={style.text}>Concluídas</Text>
                    </TouchableOpacity>
                    {tarefaConcluidaVisible && (
                        <TarefaConcluida handle={trocarPopupTarefasEditar} variavel={popupTarefasEditaVisible}/>
                    )}
                    <View style={style.barra}></View>
                </ScrollView>

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
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
  