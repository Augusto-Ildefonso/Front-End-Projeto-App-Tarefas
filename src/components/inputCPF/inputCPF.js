import React from 'react';
import { View, TextInput} from 'react-native';
import { styles } from './style';

export default function InputCPF() {
    const [text, onChangeText] = React.useState();
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={'CPF...'}
                placeholderTextColor={'#424242'}
                autoCapitalize='none'
                inputMode='numeric'
            />
        </View>
    );
  }