import React from "react";
import { View, TouchableOpacity, Modal, Text, StyleSheet } from "react-native";
import { useState } from "react";
import PopupStatus from "../popupStatus/popupStatus";
 
export default InputStatus = ({status, setStatus}) => {
    const [statusVisible, setStatusVisible] = useState(false);

    const mudarStatus = () =>{
        setStatusVisible(!statusVisible);
    }

    const styles = style(status);

    return(
        <View>
                <Modal
                    visible={statusVisible}
                    transparent={true}
                    onRequestClose={mudarStatus}
                >
                    <PopupStatus status={status} setStatus={setStatus} mudarStatus={mudarStatus}/>
                    <TouchableOpacity style={{width: 393, height: 917, position: 'absolute', backgroundColor: '#000000', opacity: 0.3}} onPress={mudarStatus}/>
                </Modal>

                <TouchableOpacity style={styles.barra} onPress={mudarStatus}/>
        </View>
        
    );
};

const style = (status) => StyleSheet.create({
    barra:{
        width: 80,
        height: 12.39,
        marginLeft: 20,
        marginTop: 0,
        borderRadius: 10,
        backgroundColor: status,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
    }
});