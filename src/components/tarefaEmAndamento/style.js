import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    view:{
        flex: 1,
        marginTop: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        width: 327,
        height: 60,
        paddingLeft: 5,
        backgroundColor: "#71CCFF",
        borderRadius: 10,
    },
    text:{
        fontFamily: 'Jura-Regular',
        fontSize: 13,
        color: 'white',
    }
})