import React from 'react';
import { View, TextInput} from 'react-native';
import { styles } from './style';

export default function InputNome({nome, setNome}) {
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(nome) => setNome(nome)}
                value={nome}
                placeholder={'Nome...'}
                placeholderTextColor={'#424242'}
                autoCapitalize='none'
            />
        </View>
    );
  }