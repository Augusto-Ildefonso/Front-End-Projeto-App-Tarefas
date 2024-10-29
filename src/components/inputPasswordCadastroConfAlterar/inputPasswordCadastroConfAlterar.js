import React from 'react';
import { View, TextInput, Alert } from 'react-native';
import { styles } from './style';

export default function InputPasswordCadastroConfAlterar() {
    const [text, onChangeText] = React.useState();
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={'Confirmar Nova Senha...'}
                placeholderTextColor={'#424242'}
                secureTextEntry={true}
            />
        </View>
    );
  }