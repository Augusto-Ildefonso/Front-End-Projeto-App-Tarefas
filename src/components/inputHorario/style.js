import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input:{
        width: 139,
        height: 48,
        padding: 10,
        backgroundColor: '#B6B6B6',
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
        marginTop: 3,   
        marginLeft: 190,   
        fontFamily: 'Jura-Bold', 
        textAlign: 'center', 
    },
    botaoCancelar:{
        
        backgroundColor: '#B6B6B6',
        width: 100,
        height: 48,
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 4},
        justifyContent: 'center',
        alignItems: 'center',  
    },
    botaoConfirmar:{
        backgroundColor: '#0600FF',
        width: 100,
        height: 48,
        borderRadius: 15,
        shadowColor: '#0600FF',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 4},
        justifyContent: 'center',
        alignItems: 'center',
    },
});