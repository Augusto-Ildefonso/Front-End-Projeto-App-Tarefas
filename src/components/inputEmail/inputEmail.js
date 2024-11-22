import React from 'react';
import { View, TextInput, Alert } from 'react-native';
import { styles } from './style';

export default function InputEmail({ login, setLogin }) {
    return (
        <View>
            <TextInput
                style={styles.input}
                value={login}
                onChangeText={(login) => setLogin(login)}
                keyboardType={'email-address'}
                placeholder={'E-mail ou CPF'}
                placeholderTextColor={'#424242'}
                autoCapitalize='none'
            />
        </View>
    );
  }