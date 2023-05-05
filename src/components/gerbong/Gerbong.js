import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';
const Gerbong = (props) => {
    const [colorIndex, setColorIndex] = useState(0)
    const colors = [['white', 'white'], ['#85D3FF', '#2596D7'], ['#FE9B4B', '#FE9B4B']];
    const onPressHandler = () => {
        if (colorIndex === colors.length - 1) {
            setColorIndex(0)

        } else {
            setColorIndex(colorIndex + 1)

        }
    }
    const currentColors = colors[colorIndex]


    const DATA = [{
        id: 'A',
        title: '1'

    },
    {
        id: 'B',
        title: '2',

    },

    ]

    return (
        <TouchableOpacity onPress={onPressHandler}>
            <LinearGradient colors={currentColors} style={styles.button}>


                <Text>{props.title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 38,
        height: 100,

        borderColor: '#F2F2F2',
        borderRadius: 8,
        borderWidth: 2

    },

});

export default Gerbong;
