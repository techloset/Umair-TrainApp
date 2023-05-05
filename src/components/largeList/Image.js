import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Hello = (props) => {
    return (
        <View>
            <Image source={props.image} style={{ width: props.width, height: props.height }} />

        </View>
    )
}

export default Hello

const styles = StyleSheet.create({})