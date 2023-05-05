import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Chair = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const colors = [['white', 'white'], ['#85D3FF', '#2596D7'], ['#FE9B4B', '#FE9B4B']];
    const onPressHandler = () => {
        if (colorIndex === colors.length - 1) {
            // Reset the color index after the last color
            setColorIndex(0);
        } else {
            // Increment the color index to move to the next color
            setColorIndex(colorIndex + 1);
        }
    };
    const currentColors = colors[colorIndex];
    return (
        <View>
            <TouchableOpacity onPress={onPressHandler} style={colorIndex ? styles.hover : null}>
                <LinearGradient colors={currentColors} style={styles.button} />




            </TouchableOpacity >
        </View>
    )
}

export default Chair

const styles = StyleSheet.create({
    button: {
        width: 28,
        height: 28,
        borderRadius: 4,
        borderWidth: 2,  // Add a border width
        borderColor: '#F2F2F2',  // Add a border color
    },

    hover: {
        shadowColor: "red",
        elevation: 20,

        shadowOffset: {
            width: 20,
            height: 40,
        },
        shadowOpacity: 1,
        shadowRadius: 30,

    },
});

