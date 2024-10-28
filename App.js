
import { StyleSheet, View } from 'react-native';
import { MainNavigator } from './src/navigators/RootNavigator';

export default function App() {
  return (
    <MainNavigator initialScreen='TelaLogin'/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});

/*
function InputBox(props){
    return(
        <View style = {styles({width: props.width, required: props.required}).container}>
            <>
            {props.icon}
            </>
            <TextInput style = {styles({width: props.width, required: props.required}).text}
                inputMode = {props.inputMode} 
                placeholder= {props.text}
                placeholderTextColor={props.required? colors.orange : colors.grey}
                editable={props.editable}
<InputBox  
                icon = {<CustomIcon name = 'mail'/>} 
                text = 'E-mail'
                setText={(text) =>{
                    setEmail(text);
                }}/>
*/