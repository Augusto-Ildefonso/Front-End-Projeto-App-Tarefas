import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { DatePicker } from 'react-native-datepicker';

export default function InputData() {
    const [data, setData] = useState('');

    const mudarData = (data) => {
        setData(data);
    }

    return (
        <View>
            <DatePicker
                format="DD-MM-YYYY"
                style={styles.input}
                date={data}
                onDateChange={mudarData}
            />
        </View>
    );
}