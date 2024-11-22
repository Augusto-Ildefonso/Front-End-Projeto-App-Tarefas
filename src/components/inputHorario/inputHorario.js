import React, { useState } from 'react';
import { View, Pressable, TextInput, Platform, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function InputHorário({time, setTime}) {
    return (
        <View>
            <TextInput
                style={styles.input}
                value={time}
                onChangeText={(time) => setTime(time)}
                keyboardType={'default'}
                placeholder={':'}
                placeholderTextColor={'#424242'}
                autoCapitalize='none'style={styles.input}
            />
        </View>
    );
}