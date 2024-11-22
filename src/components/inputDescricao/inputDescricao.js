import React from 'react';
import { View, TextInput} from 'react-native';
import { styles } from './style';

export default function InputDescricao({description, setDescription}) {
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(description) => setDescription(description)}
                value={description}
                placeholderTextColor={'#424242'}
                autoCapitalize='none'
            />
        </View>
    );
  }