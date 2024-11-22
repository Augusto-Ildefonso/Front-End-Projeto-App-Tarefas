import React, {useEffect} from "react";
import { styles } from "./style";
import { TouchableOpacity, View, Text } from "react-native";

export default PopupStatus = ({status, setStatus, mudarStatus}) => {
    const defStatus = (cor) =>{
        setStatus(cor);
        mudarStatus();
    }
    return(
       <View style={styles.view}>
            <Text style={styles.text}>Status</Text>

            <TouchableOpacity style={styles.barra1} onPress={() => defStatus('#FC5647')}>
                <Text style={{marginLeft: 5, marginTop: 5, fontFamily: 'Jura-Bold'}}>Não Iniciada</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.barra2} onPress={() => defStatus('#71CCFF')}>
                <Text style={{marginLeft: 5, marginTop: 5, fontFamily: 'Jura-Bold'}}>Em andamento</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.barra3} onPress={() => defStatus('#28C27F')}>
                <Text style={{marginLeft: 5, marginTop: 5, fontFamily: 'Jura-Bold'}}>Concluída</Text>
            </TouchableOpacity>
        </View>
        
    );
};