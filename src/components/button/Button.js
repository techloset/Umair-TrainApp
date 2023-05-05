import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Button = () => {
    const navigation = useNavigation();
    return (
        <View style={{}}>

            <View style={{ justifyContent: 'center', alignContent: 'center', flexDirection: 'row', marginBottom: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Summary')}>
                    <View style={[{ display: 'flex', flexDirection: 'row', gap: 11 }, styles.button]}>

                        <Image source={require('../../assets/filter.png')} style={{ width: 14, height: 16 }} />
                        <Text style={{ color: '#FFFFFF', fontSize: 12, fontFamily: 'PlusJakartaSans-Bold', }}>FILTER</Text>
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F9862A', width: 168, height: 45, borderRadius: 25, display: 'flex',
        justifyContent: 'center', alignContent: 'center', alignItems: 'center',
        marginTop: 12

    }
})