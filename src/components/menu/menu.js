import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { style } from './style'; 

const Drawer = createDrawerNavigator();

export default function Menu(){
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="menu" drawerStyle={style.menu}>
                <Drawer.Screen
                    name="Alterar Dados"
                    //component={}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}