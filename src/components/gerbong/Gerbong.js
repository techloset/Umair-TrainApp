import { StyleSheet, Text, View, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';
const Gerbong = (props) => {
    const [colorIndex, setColorIndex] = useState(0)
    const colors = [['white', 'white'], ['#85D3FF', '#2596D7'], ['#FE9B4B', '#FE9B4B']];
    const [changeColor, setChangeColor] = useState(false)
    const onPressHandler = () => {
        if (colorIndex === colors.length - 1) {
            setColorIndex(0)
            setChangeColor(false)

        } else {
            setColorIndex(colorIndex + 1)
            setChangeColor(true)
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
        <ScrollView style={{ display: 'flex', gap: 32 }}>

            <TouchableOpacity onPress={onPressHandler} style={[styles.shadow, props.Align]} >
                <LinearGradient colors={currentColors} style={styles.button} >


                    <Text style={[{ display: 'flex', alignSelf: 'center', paddingVertical: 35, fontSize: 14, fontFamily: 'PlusJakartaSans-Bold' }, { color: changeColor ? 'white' : '#88879C' }]} >{props.title}</Text>
                </LinearGradient>
            </TouchableOpacity >
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 38,
        height: 100,

        borderColor: '#F2F2F2',
        borderRadius: 8,
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 32


    },
    shadow: {
        display: 'flex',
        gap: 20
    }

});

export default Gerbong;
