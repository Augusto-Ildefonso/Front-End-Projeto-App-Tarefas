import React from "react";
import { styles } from "./style";
import { TouchableOpacity, View, Text } from "react-native";

export default PopupStatus = ({handle}) => {
    return(
       <View style={styles.view}>
            <Text style={styles.text}>Status</Text>

            <TouchableOpacity style={styles.barra}>
                <Text style={{marginLeft: 5, marginTop: 5, fontFamily: 'Jura-Bold'}}>Não Iniciada</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.barra}>
                <Text style={{marginLeft: 5, marginTop: 5, fontFamily: 'Jura-Bold'}}>Em andamento</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.barra}>
                <Text style={{marginLeft: 5, marginTop: 5, fontFamily: 'Jura-Bold'}}>Concluída</Text>
            </TouchableOpacity>
        </View>
        
    );
};