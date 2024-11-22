import React from "react";
import { useState } from "react";
import { TouchableOpacity, View, Text, Linking, Image, Modal } from "react-native";
import { styles } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import PopupSairConta from "../popupSairConta/popupSairConta";
import PopupDeletarConta from "../popupDeletarConta/popupDeletarConta";

export default BarraMenu = ({navigation, menuClose}) => {
    function onPressAlterar(){
        navigation.navigate('TelaAlterar')
        menuClose();
    };

    const [popupSairVisible, setPopupSairVisible] = useState(false);
    const [popupDeletarVisible, setPopupDeletarVisible] = useState(false);

    const handleSair = () => {
        setPopupSairVisible(!popupSairVisible);
    };

    return(
        <View style={{marginTop: -50}}>
            <TouchableOpacity style={styles.fora} onPress={menuClose}></TouchableOpacity>
            <View style={styles.view}>
                <TouchableOpacity onPress={onPressAlterar} style={styles.button}> 
                    <Text style={styles.text}>Alterar Dados</Text>
                </TouchableOpacity>

                <Modal visible={popupSairVisible} transparent={true} onRequestClose={handleSair}>
                    <PopupSairConta navigation={navigation} handle={handleSair}/>
                </Modal>
                <TouchableOpacity onPress={handleSair} style={styles.button1}> 
                    <Text style={styles.text}>Sair da Conta</Text>
                </TouchableOpacity>

                <Modal visible={popupDeletarVisible} transparent={true} onRequestClose={() => setPopupDeletarVisible(false)}>
                    <PopupDeletarConta navigation={navigation} handle={() => setPopupDeletarVisible(false)}/>
                </Modal>
                <TouchableOpacity onPress={() => setPopupDeletarVisible(true)} style={styles.button1}> 
                    <Text style={styles.text}>Deletar Conta</Text>
                </TouchableOpacity>

                <View style={styles.rodape}>
                    <TouchableOpacity style={styles.primeiroRodape} onPress={() => Linking.openURL('https://www.facebook.com/ICMCJunior/')}>
                        <AntDesign
                            name="facebook-square"
                            size={31}
                            color={'#ffffff'}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.segundoRodape} onPress={() => Linking.openURL('https://www.instagram.com/icmcjunior/')}>
                    <AntDesign
                            name="instagram"
                            size={31}
                            color={'#ffffff'}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ultimoRodape} onPress={() => Linking.openURL('https://www.linkedin.com/company/icmcjunior/posts/?feedView=all')}>
                    <AntDesign
                            name="linkedin-square"
                            size={31}
                            color={'#ffffff'}
                        />
                    </TouchableOpacity>
                    <Image
                        source={require('../../../assets/logo_icmc.png')}
                        style={styles.logo}
                    />
                </View>
            </View>
        </View>

    );
}