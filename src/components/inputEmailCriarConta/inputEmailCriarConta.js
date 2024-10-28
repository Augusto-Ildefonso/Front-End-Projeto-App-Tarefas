import React from 'react';
import { View, TextInput, Alert } from 'react-native';
import { styles } from './style';

export default function InputEmailCriarConta() {
    const [text, onChangeText] = React.useState();
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={'E-mail...'}
                placeholderTextColor={'#424242'}
                autoCapitalize='none'
            />
        </View>
    );
  }