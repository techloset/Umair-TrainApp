import { StyleSheet, Pressable, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { heightPixel, widthPixel } from '../../responsiveness/Responsiveness'

const Arrow = () => {
    const navigation = useNavigation()
    return (
        <View>
            <TouchableOpacity style={styles.radial} onPress={() => navigation.navigate('Summary')}>
                <Image source={require('../../assets/rightArrow.png')} style={{
                    width: widthPixel(9), height: heightPixel(9),

                }} />
            </TouchableOpacity>
        </View>
    )
}

export default Arrow

const styles = StyleSheet.create({
    radial: {
        backgroundColor: '#85D3FF',
        backgroundImage: 'radial-gradient(125% 125% at 85.42% 0%, #85D3FF 0%, #2596D7 100%)',
        width: widthPixel(24),
        height: heightPixel(24),
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