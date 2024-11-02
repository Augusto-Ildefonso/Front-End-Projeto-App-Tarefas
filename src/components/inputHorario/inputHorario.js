import React, { useState } from 'react';
import { View, Pressable, TextInput, Platform, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function InputHorário() {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [dateOfBirth, setDateOfBirth] = useState('');

    const toggleDatepicker = () => {
        setShowPicker(!showPicker);
    };
    
    const onChange = ({ type }, selectedDate) => {
        if(type == "set"){
            const currentDate = selectedDate;
            setDate(currentDate);

            if(Platform.OS === 'android'){
                toggleDatepicker();
                setDateOfBirth(currentDate.toDateString());
            }
        } else{
            toggleDatepicker();
        }
    };

    const confirmIOSDate = () => {
        setDateOfBirth(date.toDateString());
        toggleDatepicker();
    };

    return (
        <View>

            {showPicker && (
                <DateTimePicker
                    mode='date'
                    display='spinner'
                    value={date}
                    onChange={onChange}
                />
            )}

            {showPicker && Platform.OS === 'ios' && (
                <View style={{flexDirection: "row", justifyContent: "space-around", }}> 

                <TouchableOpacity onPress={toggleDatepicker} style={styles.botaoCancelar}>
                    <Text style={{color: '#FFFFFF', fontSize: 19, fontFamily: 'Jura-Bold', }}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={confirmIOSDate} style={styles.botaoConfirmar}>
                    <Text style={{color: '#FFFFFF', fontSize: 17.5, fontFamily: 'Jura-Bold', }}>Confirmar</Text>
                </TouchableOpacity>

                </View>
            )}
            
            

            {!showPicker && (
                <Pressable
                    onPress={toggleDatepicker}
                >
                    <TextInput
                        style={styles.input}
                        placeholder={' : '}
                        value={dateOfBirth}
                        onChangeText = {setDateOfBirth}
                        placeholderTextColor={'#424242'}
                        autoCapitalize='none'
                        editable={false}
                        onPressIn={toggleDatepicker}
                    />
                </Pressable>
            )}
            
        </View>
    );
}