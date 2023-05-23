import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const Calling = (props) => {

    return (
        <View style={styles.hello}>
            <Text style={[styles.text, { color: props.color, backgroundColor: props.backgroundColor, borderRadius: props.borderRadius, width: props.width, height: props.height },]}>{props.text}</Text>

        </View>
    )
}


export default Calling

const styles = StyleSheet.create({
    hello: {
        // width: 30



    },
    text: {
        fontSize: 10,
        fontFamily: 'PlusJakartaSans-Bold',
        textAlign: 'center'
    }
})