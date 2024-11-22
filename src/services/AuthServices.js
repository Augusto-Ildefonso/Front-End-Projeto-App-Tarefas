import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const loginUser = async (userLogin, password) => {
    try{
        const res = await axios.post("/users/login", {login: userLogin, password: password});
        const {token, login} = res.data;
        await AsyncStorage.setItem("user", JSON.stringify({login, password, token}));
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        return true;
    } catch (error) {
        console.log(error);
        await AsyncStorage.removeItem("user");
        return false;
    }
}

const logoutUser = async () => {
    await AsyncStorage.removeItem("user");
    await AsyncStorage.clear();
    axios.defaults.headers.common.Authorization = null;
}

const getUserData = async () => {
    let user = await AsyncStorage.getItem("user");
    if (!user) return false;
    user = JSON.parse(user);

    axios.defaults.headers.common.Authorization = `Bearer ${user.token}`;
    return user;
}

export default {loginUser, logoutUser, getUserData};