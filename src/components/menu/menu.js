import { View, TouchableOpacity } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import { style } from './style'; 

export default function Menu(){
    return(
        <View>
            <TouchableOpacity onPress={1}>
                <Entypo
                    name='menu'
                    size={30}
                    color='#0400AA'
                    style={style.menuIcon}
            />
            </TouchableOpacity>
        </View>
    );
}