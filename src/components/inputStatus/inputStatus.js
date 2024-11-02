import React from "react";
import { View, TouchableOpacity, Modal, Text } from "react-native";
import { useState } from "react";
import { styles } from "./style";
import PopupStatus from "../popupStatus/popupStatus";
 
export default InputStatus = () => {
    const [statusVisible, setStatusVisible] = useState(false);

    function mudarStatus(){
        setStatusVisible(!statusVisible);
    }
    return(
        <View>
                <Modal
                    visible={statusVisible}
                    transparent={true}
                    onRequestClose={mudarStatus}
                >
                    <PopupStatus handle={mudarStatus}/>
                    <TouchableOpacity style={{width: 393, height: 917, position: 'absolute', backgroundColor: '#000000', opacity: 0.3}} onPress={mudarStatus}/>
                </Modal>

                <TouchableOpacity style={styles.barra} onPress={mudarStatus}/>
        </View>
        
    );
};