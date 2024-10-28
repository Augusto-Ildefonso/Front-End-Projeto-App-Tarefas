import TelaLogin from "../screens/TelaLogin/TelaLogin";
import TelaCadastro from "../screens/TelaCadastro/TelaCadastro";
import TelaTarefas from "../screens/TelaTarefas/TelaTarefas";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export function MainNavigator({initialScreen}){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialScreen}>
                <Stack.Screen name="TelaLogin" component={TelaLogin} options={{headerShown: false}}/>
                <Stack.Screen name="TelaCadastro" component={TelaCadastro} options={{headerShown: false}}/>
                <Stack.Screen name="TelaTarefas" component={TelaTarefas} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}