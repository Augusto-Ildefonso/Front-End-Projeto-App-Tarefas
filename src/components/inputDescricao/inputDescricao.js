import React from 'react';
import { View, TextInput} from 'react-native';
import { styles } from './style';

export default function InputDescricao() {
    const [text, onChangeText] = React.useState();
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholderTextColor={'#424242'}
                autoCapitalize='none'
            />
        </View>
    );
  }