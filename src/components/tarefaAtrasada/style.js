import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    view:{
        marginLeft: 14,
        flex: 1,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        width: 300,
        height: 60,
        paddingLeft: 5,
        backgroundColor: "#FC5647",
        borderRadius: 10,
    },
    text:{
        fontFamily: 'Jura-Regular',
        fontSize: 13,
        color: 'white',
    }
})