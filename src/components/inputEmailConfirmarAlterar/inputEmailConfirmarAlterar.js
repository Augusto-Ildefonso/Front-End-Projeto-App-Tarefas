import React from 'react';
import { View, TextInput, Alert } from 'react-native';
import { styles } from './style';

export default function InputEmailConfirmarAlterar({email, setEmail}) {
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(email) => setEmail(email)}
                value={email}
                placeholder={'Confirmar E-mail...'}
                keyboardType={'email-address'}
                placeholderTextColor={'#424242'}
                autoCapitalize='none'
            />
        </View>
    );
  }