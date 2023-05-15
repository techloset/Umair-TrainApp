import { Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'

import React from 'react'
import { styles } from './ChairSelectionStyle'
import LinearGradient from 'react-native-linear-gradient';
import Chair from '../../components/chair/Chair';
import Gerbong from '../../components/gerbong/Gerbong';


const ChairSelection = () => {
    const DATA = [
        {
            id: 'A',
            title: '1',
        },
        {
            id: 'B',
            title: '2',
        },
        {
            id: 'C',
            title: '3'
        },
        {
            id: 'D',
            title: '4'
        },
        {
            id: 'E',
            title: '5'
        },
        {
            id: 'F',
            title: '6'
        }

    ];
    return (
        <>
            <View style={{ flex: 1 }}>

                <ImageBackground source={require('../../assets/bg4thScreen.png')} style={{ flex: 3 }}>
                    <View style={{ flex: 3 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 24, justifyContent: 'space-between', marginHorizontal: 32, alignItems: 'center' }}>
                            <Text style={{ color: '#59597C', fontSize: 24, fontFamily: 'PlusJakartaSans-Bold', width: 148 }}>Pilih tempat dudukmu</Text>
                            <View style={{ gap: 8, alignItems: 'flex-end' }}>
                                <Text style={{ color: '#333E63', fontSize: 10, fontFamily: 'PlusJakartaSans-Bold', }}>Ekonomi (C)</Text>
                                <Text style={{ color: '#5DB9EE', fontSize: 14, fontFamily: 'PlusJakartaSans-Bold', }}>
                                    Gerbong 2 - 3A
                                </Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, marginHorizontal: 32 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                                <View style={{ width: 16, height: 16, backgroundColor: 'red', borderRadius: 4 }}>

                                </View>
                                <Text style={{ color: '#333E63', fontSize: 10, fontFamily: 'PlusJakartaSans-Regular' }}>Tersedia</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                                <View style={{ width: 16, height: 16, backgroundColor: '#FE9B4B', borderRadius: 4 }}>

                                </View>
                                <Text style={{ color: '#333E63', fontSize: 10, fontFamily: 'PlusJakartaSans-Regular' }}>Terisi</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                                <LinearGradient
                                    colors={['#85D3FF', '#2596D7']}
                                    style={{ width: 16, height: 16, borderRadius: 4 }}
                                >

                                </LinearGradient>
                                <Text style={{ color: '#333E63', fontSize: 10, fontFamily: 'PlusJakartaSans-Regular' }}>Terpilih</Text>
                            </View>
                        </View>
                        <View style={{ borderRadius: 16, marginTop: 24, flex: 1, }}>

                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 24, }}>
                                <View style={{ display: 'flex', flex: 1, }} >
                                    <Text style={{ textAlign: 'center', marginBottom: 28, fontSize: 14, fontFamily: 'PlusJakartaSans-Bold', color: '#59597C' }}>Gerbong</Text>
                                    < ScrollView showsVerticalScrollIndicator={false}>

                                        <View style={{ display: 'flex', gap: 32, justifyContent: 'center', alignItems: 'center' }}>

                                            {DATA.map((item) => (
                                                <Gerbong key={item.id} title={item.title} style={styles.Align} />
                                            ))}
                                        </View>

                                    </ScrollView>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 20, flex: 2, justifyContent: 'center', }}>
                                    <View style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'PlusJakartaSans-Bold', color: '#59597C' }} >A</Text>
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />


                                    </View>
                                    <View style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'PlusJakartaSans-Bold', color: '#59597C' }} >B</Text>
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                    </View>
                                    <View style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'PlusJakartaSans-Bold', color: '#59597C' }}>C</Text>
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                    </View>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 20, flex: 1.25, justifyContent: 'center', }}>
                                    <View style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'PlusJakartaSans-Bold', color: '#59597C' }}>D</Text>
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                    </View>
                                    <View style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'PlusJakartaSans-Bold', color: '#59597C' }}>E</Text>
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                    </View>
                                </View>
                            </View>
                        </View >
                    </View >
                </ImageBackground >

                <View style={{ flex: 0.4, backgroundColor: '#F2F9FD' }}>

                    <TouchableOpacity style={[{ marginHorizontal: 32, marginTop: 12 }, styles.hover]}>
                        <LinearGradient colors={['#85D3FF', '#2596D7']} style={{ borderRadius: 8 }}>

                            <Text style={{ paddingVertical: 18, textAlign: 'center', color: '#FFFFFF', fontSize: 12, fontFamily: 'PlusJakartaSans-ExtraBold', }}>PILIH   TEMPAT   DUDUK</Text>

                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View >
        </>
    )
}

export default ChairSelection
