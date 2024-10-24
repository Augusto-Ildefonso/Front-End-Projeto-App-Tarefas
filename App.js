import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import TelaLogin from './src/screens/TelaLogin/TelaLogin';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaLogin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    //alignItems: 'center',
    //justifyContent: 'center',
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