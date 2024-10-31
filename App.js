import { StyleSheet, View } from 'react-native';
import { MainNavigator } from './src/navigators/RootNavigator';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';


export default function App() {
  const [loaded, error] = useFonts({
    'Jura-Regular': require('./assets/fonts/Jura-Regular.ttf'),
    'Jura-Bold': require('./assets/fonts/Jura-Bold.ttf'),
  })

  

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