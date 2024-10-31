import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    text:{
        marginTop: 4,
        marginLeft: 186,
        color: '#424242',
        fontFamily: 'Jura-Bold',
    },
    view:{
        backgroundColor: '#EEEEEE',
        height: 971, // Arrumar melhor depois
    },
    logo:{
        width: 200,
        height: 200,
        marginTop: 50,
        marginLeft: 96.5,
    },
    nome:{
        width: 161,
        height: 94,
        marginTop: 23,
        marginLeft: 116,
        resizeMode: 'stretch',
    },
    rodape:{
        width: 165,
        height: 40,
        marginTop: 80,
        marginLeft: 114,
    },
    primeiroElementoRodape:{
        paddingLeft: 0,
    },
    meioElementoRodape:{
        marginLeft: 60,
        marginTop: -40,
    },
    ultimoElementoRodape:{
        paddingRight: 0,
        marginLeft: 120,
        marginTop: -40,
    },
    
})