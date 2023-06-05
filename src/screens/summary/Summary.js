import { Text, View, TouchableOpacity, Image, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import { styles } from './SummaryStyle'
import SummaryList from '../../components/summaryList/SummaryList'

import ArmaniList from '../../components/armaniList/ArmaniList'

import ArrowList from '../../components/cardList/Accordian'
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../responsiveness/Responsiveness'


const Summary = ({ navigation }) => {
    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <ImageBackground source={require('../../assets/Background3rd.png')} style={{ flex: 1, }}>
                <View style={{ flex: 4, }}>
                    <View style={{ borderWidth: 1.5, borderColor: '#FFFFFF', borderBottomRightRadius: 12, borderBottomLeftRadius: 12 }}>

                        <View style={styles.Hello}>
                            <TouchableOpacity onPress={() => navigation.navigate('TicketList')}>

                                <Image source={require('../../assets/LeftArrow.png')} style={{ width: widthPixel(16), height: heightPixel(13), marginTop: pixelSizeVertical(10) }} />
                            </TouchableOpacity>
                            <Text style={{ color: '#333E63', fontSize: fontPixel(18), fontFamily: 'PlusJakartaSans-Bold', }}>Ringkasan pemesanan</Text>
                        </View>

                        <SummaryList />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginLeft: pixelSizeHorizontal(18), gap: 10, marginTop: pixelSizeVertical(6) }}>
                        <Image source={require('../../assets/heart.png')} style={{ width: widthPixel(16), height: heightPixel(13) }} />
                        <Text style={{ fontSize: fontPixel(14), fontFamily: 'PlusJakartaSans-Bold', color: '#333E63' }}>Penumpang tersimpan</Text>
                    </View>
                    <ArmaniList />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: pixelSizeHorizontal(16), marginTop: pixelSizeVertical(32) }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 9, alignItems: 'center' }}>

                            <Image source={require('../../assets/detail.png')} style={{ width: widthPixel(18), height: heightPixel(14) }} />
                            <Text style={{ color: '#333E63', fontSize: fontPixel(14), fontFamily: 'PlusJakartaSans-Bold', }}>Detail penumpang</Text>
                        </View>
                        <Text style={{ color: '#FE9B4B', fontSize: fontPixel(10), fontFamily: 'PlusJakartaSans-Bold', }}>+  Tambah penumpang</Text>
                    </View>
                    <View style={{ flex: 1 }}>

                        <ArrowList style={{ flex: 1 }} />
                    </View>

                </View >
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: pixelSizeHorizontal(20), marginTop: pixelSizeVertical(15), flex: 0.5 }}>

                    <TouchableOpacity>
                        <Text style={{ color: '#88879C', fontSize: fontPixel(13), fontFamily: 'PlusJakartaSans-Bold', backgroundColor: 'white', paddingHorizontal: '14%', paddingVertical: '4%', borderRadius: 25, textAlign: 'center', verticalAlign: 'middle' }}>PILIH   KURSI</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ChairSelection')}>
                        <Text style={{ color: 'white', fontSize: fontPixel(13), fontFamily: 'PlusJakartaSans-Bold', backgroundColor: '#F8862A', paddingHorizontal: '15%', paddingVertical: '4%', borderRadius: 25, textAlign: 'center', verticalAlign: 'middle' }}>LANJUT</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </>

    )
}

export default Summary

