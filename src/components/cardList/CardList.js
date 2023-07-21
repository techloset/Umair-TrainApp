


import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'



import PickerList from '../picker/Picker'
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../responsiveness/Responsiveness'


const CardList = () => {
    const [content, setContent] = useState(false)

    return (
        <View style={{}}>

            <View style={{ backgroundColor: 'white', marginHorizontal: pixelSizeHorizontal(16), }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: pixelSizeHorizontal(16), marginTop: pixelSizeVertical(11), marginBottom: pixelSizeVertical(13) }}>

                    <View style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>

                        <View style={styles.cirle}>
                            <Image source={require('../../assets/happyFace.png')} style={{ width: widthPixel(20), height: heightPixel(20) }} />
                        </View>

                        <Text style={{ color: '#333E63', fontSize: fontPixel(14), fontFamily: 'PlusJakartaSans-Bold', }}>Penumpang 1</Text>

                    </View>

                    <TouchableOpacity onPress={() => setContent(!content)} style={{ width: widthPixel(30), height: heightPixel(30), justifyContent: 'center', alignItems: 'center' }}>
                        {content ? <Image source={require('../../assets/down.png')} style={{ width: widthPixel(9), height: heightPixel(6) }} /> : <Image source={require('../../assets/up.png')} style={{ width: widthPixel(9), height: heightPixel(6) }} />}

                    </TouchableOpacity>

                </View>

                <View>
                    {
                        !content &&
                        <ScrollView>
                            <ScrollView style={{ borderTopWidth: 1, borderColor: '#9F9FB9', flex: 1, }}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: pixelSizeHorizontal(16), marginTop: pixelSizeVertical(16) }}>

                                    <View style={{ gap: 8 }}>
                                        <Text style={{ color: '#88879C', fontSize: fontPixel(12), fontFamily: 'PlusJakartaSans-Bold', }}>Jenis Identitas</Text>
                                        <PickerList />
                                    </View>
                                    <View >
                                        <Text style={{ color: '#88879C', fontSize: fontPixel(12), fontFamily: 'PlusJakartaSans-Bold', marginBottom: pixelSizeVertical(8) }}>Nomor identitas</Text>
                                        <View style={{ backgroundColor: '#F4F7F9', width: widthPixel(150), height: heightPixel(38), borderBottomWidth: 2, borderColor: '#9F9FB9', justifyContent: 'center' }}>
                                            <Text style={{ color: '#59597C', fontSize: fontPixel(12), fontFamily: 'PlusJakartaSans-Regular', paddingLeft: pixelSizeHorizontal(10) }}>A 38910381</Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: '#88879C', fontSize: fontPixel(10), fontFamily: 'PlusJakartaSans-Bold', marginHorizontal: pixelSizeHorizontal(16), marginTop: pixelSizeVertical(24), marginBottom: pixelSizeVertical(10) }}>Nama lengkap</Text>
                                    <View style={{ backgroundColor: '#F8F8F9', height: heightPixel(34), marginHorizontal: pixelSizeHorizontal(16), borderBottomWidth: 2, borderBottomColor: '#9F9FB9' }}>
                                        <Text style={{ color: '#59597C', fontSize: fontPixel(12), fontFamily: 'PlusJakartaSans-Regular', paddingHorizontal: pixelSizeHorizontal(8), paddingVertical: pixelSizeVertical(8) }}>Ibnu Batutah</Text>
                                    </View>
                                </View>
                                <View style={{ marginHorizontal: pixelSizeHorizontal(16), marginTop: pixelSizeVertical(12) }}>
                                    <Text style={{ color: '#88879C', fontSize: fontPixel(10), fontFamily: 'PlusJakartaSans-Regular', }}>Penumpang bayi tidak mendapat kursi sendiri. Penumpang dibawah 18 tahun dapat mengisi dengan nomor tanda pengenal lain atau tanggal lahir (ddmmyyyy)</Text>
                                </View>



                            </ScrollView>
                        </ScrollView>
                    }

                </View>

            </View>
        </View>
    )
}

export default CardList

const styles = StyleSheet.create({
    cirle: {
        shadowColor: "#FE9B4B",
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.00,
        elevation: 32,
        backgroundColor: '#FA8B32',
        width: 32,
        height: 32,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center'

    }
})