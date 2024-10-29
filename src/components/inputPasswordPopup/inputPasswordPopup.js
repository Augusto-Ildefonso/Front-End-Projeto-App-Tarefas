import React from 'react';
import { View, TextInput, Alert } from 'react-native';
import { styles } from './style';

export default function InputPasswordPopup() {
    const [text, onChangeText] = React.useState();
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={'Insira sua senha...'}
                placeholderTextColor={'#424242'}
                secureTextEntry={true}
            />
        </View>
    );
  }