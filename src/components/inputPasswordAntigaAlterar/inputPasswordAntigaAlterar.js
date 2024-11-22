import React from 'react';
import { View, TextInput, Alert } from 'react-native';
import { styles } from './style';

export default function InputPasswordAntigaAlterar({password, setPassword}) {
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(password) => setPassword(password)}
                value={password}
                placeholder={'Senha Antiga...'}
                placeholderTextColor={'#424242'}
                secureTextEntry={true}
            />
        </View>
    );
  }