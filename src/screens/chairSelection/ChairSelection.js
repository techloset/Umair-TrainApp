import { Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'

import React from 'react'
import { styles } from './ChairSelectionStyle'
import LinearGradient from 'react-native-linear-gradient';
import Chair from '../../components/chair/Chair';
import Gerbong from '../../components/gerbong/Gerbong';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../responsiveness/Responsiveness';


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


    ];
    return (
        <>
            <View style={{ flex: 1 }}>
                <ImageBackground source={require('../../assets/ChairBg.png')} style={{ flex: 3 }}>
                    <View style={{ flex: 0.8, }}>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: pixelSizeVertical(65), justifyContent: 'space-between', marginHorizontal: pixelSizeHorizontal(32), alignItems: 'center' }}>
                            <Text style={{ color: '#59597C', fontSize: fontPixel(24), fontFamily: 'PlusJakartaSans-Bold', width: widthPixel(148), lineHeight: pixelSizeVertical(36) }}>Pilih tempat dudukmu</Text>
                            <View style={{ gap: 8, alignItems: 'flex-end', marginTop: pixelSizeVertical(17) }}>
                                <Text style={{ color: '#333E63', fontSize: fontPixel(10), fontFamily: 'PlusJakartaSans-Bold', }}>Ekonomi (C)</Text>
                                <Text style={{ color: '#5DB9EE', fontSize: fontPixel(14), fontFamily: 'PlusJakartaSans-Bold', }}>
                                    Gerbong 2 - 3A
                                </Text>
                            </View>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: pixelSizeVertical(30), marginHorizontal: pixelSizeHorizontal(32) }}>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                                <View style={{ width: widthPixel(16), height: heightPixel(16), backgroundColor: 'white', borderRadius: 4 }}>
                                </View>
                                <Text style={{ color: '#333E63', fontSize: fontPixel(10), fontFamily: 'PlusJakartaSans-Regular' }}>Tersedia</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                                <View style={{ width: widthPixel(16), height: heightPixel(16), backgroundColor: '#FE9B4B', borderRadius: 4 }}>
                                </View>
                                <Text style={{ color: '#333E63', fontSize: fontPixel(10), fontFamily: 'PlusJakartaSans-Regular' }}>Terisi</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                                <LinearGradient
                                    colors={['#85D3FF', '#2596D7']}
                                    style={{ width: widthPixel(16), height: heightPixel(16), borderRadius: 4 }}  >
                                </LinearGradient>
                                <Text style={{ color: '#333E63', fontSize: fontPixel(10), fontFamily: 'PlusJakartaSans-Regular' }}>Terpilih</Text>
                            </View>
                        </View>
                    </View>


                    <View style={{ flex: 2, borderTopWidth: 1.5, borderLeftWidth: 1, borderRightWidth: 1, borderTopRightRadius: 16, borderTopLeftRadius: 16, borderColor: 'white' }}>


                        <View style={{ marginTop: pixelSizeVertical(30) }}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: pixelSizeHorizontal(20), }}>
                                <View style={{ display: 'flex', flex: 1, }} >
                                    <Text style={{ textAlign: 'center', marginBottom: pixelSizeVertical(20), fontSize: fontPixel(14), fontFamily: 'PlusJakartaSans-Bold', color: '#59597C' }}>Gerbong</Text>
                                    < ScrollView showsVerticalScrollIndicator={false}>
                                        <View style={{ display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'center' }}>
                                            {DATA.map((item) => (
                                                <Gerbong key={item.id} title={item.title} style={styles.Align} />
                                            ))}
                                        </View>
                                    </ScrollView>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 16, marginLeft: pixelSizeHorizontal(44), flex: 2, justifyContent: 'center', }}>
                                    <View style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                                        <Text style={{ fontSize: fontPixel(14), fontFamily: 'PlusJakartaSans-Bold', color: '#59597C' }} >A</Text>
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                    </View>
                                    <View style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                                        <Text style={{ fontSize: fontPixel(14), fontFamily: 'PlusJakartaSans-Bold', color: '#59597C' }} >B</Text>
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                    </View>
                                    <View style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                                        <Text style={{ fontSize: fontPixel(14), fontFamily: 'PlusJakartaSans-Bold', color: '#59597C' }}>C</Text>
                                        <Chair />
                                        <Chair />
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
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 16, flex: 1.25, justifyContent: 'center', marginLeft: pixelSizeHorizontal(36) }}>
                                    <View style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                                        <Text style={{ fontSize: fontPixel(14), fontFamily: 'PlusJakartaSans-Bold', color: '#59597C' }}>D</Text>
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                        <Chair />
                                    </View>
                                    <View style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                                        <Text style={{ fontSize: fontPixel(14), fontFamily: 'PlusJakartaSans-Bold', color: '#59597C' }}>E</Text>
                                        <Chair />
                                        <Chair />
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
                    </View>

                    <View style={{ flex: 0.4, backgroundColor: '#F2F9FD' }}>
                        <TouchableOpacity style={[{ marginHorizontal: pixelSizeHorizontal(32), marginTop: pixelSizeVertical(12) }, styles.hover]}>
                            <LinearGradient colors={['#85D3FF', '#2596D7']} style={{ borderRadius: 8 }}>
                                <Text style={{ paddingVertical: pixelSizeHorizontal(18), textAlign: 'center', color: '#FFFFFF', fontSize: fontPixel(12), fontFamily: 'PlusJakartaSans-ExtraBold', }}>PILIH   TEMPAT   DUDUK</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ImageBackground >
            </View >
        </>
    )
}

export default ChairSelection
