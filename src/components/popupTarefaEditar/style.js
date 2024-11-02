import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    caixa:{
        zIndex: 9,
        width: 348,
        height: 353,
        marginLeft: 20,
        marginTop: 227,
        backgroundColor: '#ffffff',
        borderRadius: 15,
    },
    nomeTarefa:{
        width: 132,
        marginLeft: 40,
        marginTop: 4.12,
        fontFamily: 'Jura-Bold',
        fontSize: 15,
        
    },
    data:{
        width: 132,
        fontFamily: 'Jura-Bold',
        marginLeft: 23,
        marginTop: 11,
        fontSize: 15,
        textAlign: 'center',
    },
    horario:{
        width: 132,
        marginLeft: 194,
        marginTop: -69,
        fontSize: 15,
        fontFamily: 'Jura-Bold',
        textAlign: 'center',
    },
    descricao:{
        width: 310,
        marginTop: 12,
        marginLeft: 30,
        fontFamily: 'Jura-Bold',
        fontSize: 15,
    },  
    status:{
        width: 60,
        marginLeft: 34,
        marginTop: 8,
        fontFamily: 'Jura-Bold',
        fontSize: 15,
    },
    deleteIcon:{
        marginLeft: 190,
        marginTop: -28,
    }
});