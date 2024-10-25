import React from 'react';
import { View, TextInput, Alert } from 'react-native';
import { styles } from './style';

export default function InputPassword() {
    const [text, onChangeText] = React.useState();
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={'Senha'}
                placeholderTextColor={'#424242'}
                secureTextEntry={true}
            />
        </View>
    );
  }