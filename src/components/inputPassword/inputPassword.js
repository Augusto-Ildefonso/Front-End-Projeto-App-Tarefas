import React from 'react';
import { View, TextInput, Alert } from 'react-native';
import { styles } from './style';

export default function InputPassword({ password, setPassword }) {
    return (
        <View>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={(password) => setPassword(password)}
                keyboardType={'default'}
                placeholder={'Senha'}
                placeholderTextColor={'#424242'}
                secureTextEntry={true}
            />
        </View>
    );
  }