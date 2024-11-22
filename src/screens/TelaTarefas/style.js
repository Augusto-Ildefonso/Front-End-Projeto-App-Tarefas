import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    text:{
        position: 'absolute',
        fontSize: 30,
        fontFamily: 'Jura-Bold',
        color: '#0400AA',
        marginLeft: 30,
        marginTop: 50,
        marginBottom: 10,
    },
    view:{
        backgroundColor: '#EEEEEE',
        height: 971, // Arrumar melhor depois
    },    
    image:{
        width: 100,
        height: 59,
        marginTop: 0,
        marginLeft: 16,
        resizeMode: 'stretch',
    },
    plusIcon:{
        position: 'absolute',
        marginTop: 700,
        marginLeft: 313,
    },
    menuIcon:{
        marginTop: -44.5,
        marginLeft: 347,
    },
    Atrasadasicon: {
        marginTop: 54,
    },
    barra:{
        backgroundColor: '#0400AA',
        height: 1,
        marginTop: 10,
        width: 365,
        marginLeft: 14,
    },
    areaTarefas:{
        width: 380,
        height: 500,
    }
})