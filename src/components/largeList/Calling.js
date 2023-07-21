import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { fontPixel } from '../../responsiveness/Responsiveness'


const Calling = (props) => {

    return (
        <View style={styles.hello}>
            <Text style={[styles.text, { color: props.color, backgroundColor: props.backgroundColor, borderRadius: props.borderRadius, paddingVertical: props.paddingVertical, paddingHorizontal: props.paddingHorizontal, width: props.width, height: props.height },]}>{props.text}</Text>

        </View>
    )
}


export default Calling

const styles = StyleSheet.create({
    hello: {
        // width: 30



    },
    text: {
        fontSize: fontPixel(10),
        // paddingHorizontal: 30,
        // backgroundColor: 'red',

        fontFamily: 'PlusJakartaSans-Bold',
        textAlign: 'center'
    }
})