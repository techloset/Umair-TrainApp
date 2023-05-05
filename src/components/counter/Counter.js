import { StyleSheet, View, Image, Pressable, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
const Counter = () => {
    const [countValue, setCountValue] = useState(0)
    const increment = () => {
        setCountValue(countValue + 1)
    }
    const decrement = () => {
        setCountValue(countValue - 1)
    }

    return (
        <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
            <Pressable onPress={decrement}>
                <View style={[{ width: 20, height: 20, borderWidth: 2, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }, { borderColor: countValue > 0 ? '#E0E0E0' : '#59597C' }]}>
                    <Icon name='minus' size={15} color={'red'} style={{ color: countValue > 0 ? '#E0E0E0' : '#59597C' }} />
                </View>
            </Pressable>
            <Text>
                {countValue}
            </Text>
            <Pressable onPress={increment}>
                <View style={[{ width: 20, height: 20, borderWidth: 2, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }, { borderColor: countValue > 0 ? '#59597C' : '#E0E0E0' }]}>
                    <Icon name='plus' size={15} color={'red'} style={{ color: countValue > 0 ? '#59597C' : '#E0E0E0' }} />
                </View>

            </Pressable>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({})
