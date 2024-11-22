import React from 'react';
import { View, TextInput} from 'react-native';
import { styles } from './style';

export default function InputCPF({cpf, setCpf}) {
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(cpf) => setCpf(cpf)}
                value={cpf}
                placeholder={'CPF...'}
                placeholderTextColor={'#424242'}
                autoCapitalize='none'
                inputMode='numeric'
            />
        </View>
    );
  }