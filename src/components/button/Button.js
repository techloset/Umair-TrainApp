import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { fontPixel, heightPixel, pixelSizeVertical, widthPixel } from '../../responsiveness/Responsiveness';

const Button = () => {
    const navigation = useNavigation();
    return (
        <View style={{}}>

            <View style={{ justifyContent: 'center', alignContent: 'center', flexDirection: 'row', marginBottom: pixelSizeVertical(30) }}>
                <TouchableOpacity onPress={() => navigation.navigate('Summary')}>
                    <View style={[{ display: 'flex', flexDirection: 'row', gap: 11 }, styles.button]}>

                        <Image source={require('../../assets/filter.png')} style={{ width: widthPixel(14), height: heightPixel(16) }} />
                        <Text style={{ color: '#FFFFFF', fontSize: fontPixel(12), fontFamily: 'PlusJakartaSans-Bold', }}>FILTER</Text>
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F9862A', width: widthPixel(168), height: heightPixel(45), borderRadius: 25, display: 'flex',
        justifyContent: 'center', alignContent: 'center', alignItems: 'center',
        marginTop: pixelSizeVertical(12),
        shadowColor: "#F2994A",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6

    }
})