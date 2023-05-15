import { StyleSheet, Pressable, Image, View } from 'react-native'
import React from 'react'

const Arrow = () => {
    return (
        <View>
            <Pressable style={styles.radial}>
                <Image source={require('../../assets/rightArrow.png')} style={{
                    width: 9, height: 9,

                }} />
            </Pressable>
        </View>
    )
}

export default Arrow

const styles = StyleSheet.create({
    radial: {
        backgroundColor: '#85D3FF',
        backgroundImage: 'radial-gradient(125% 125% at 85.42% 0%, #85D3FF 0%, #2596D7 100%)',
        width: 24,
        height: 24,
        borderRadius: 8,
        shadowColor: "#5AB8ED",
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.00,
        elevation: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})