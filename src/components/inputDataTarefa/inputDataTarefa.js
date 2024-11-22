import React, { useState } from 'react';
import { View, Pressable, TextInput, Platform, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function InputDataTarefa({date, setDate}) {
    return (
        <View>
            <TextInput
                style={styles.input}
                value={date}
                onChangeText={(date) => setDate(date)}
                keyboardType={'default'}
                placeholder={'/  /'}
                placeholderTextColor={'#424242'}
                autoCapitalize='none'
            />
        </View>
    );
}