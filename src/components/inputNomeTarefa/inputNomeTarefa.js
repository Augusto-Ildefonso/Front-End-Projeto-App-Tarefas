import React from 'react';
import { View, TextInput} from 'react-native';
import { styles } from './style';

export default function InputNomeTarefa({name, setName}) {
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(name) => setName(name)}
                value={name}
                placeholder={'Digite...'}
                placeholderTextColor={'#424242'}
                autoCapitalize='none'
            />
        </View>
    );
  }