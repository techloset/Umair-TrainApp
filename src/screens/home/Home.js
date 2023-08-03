import { Text, Image, View, Pressable, Button, FlatList, StatusBar, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import CardItem from '../../components/cardItem/CardItem'
import Counter from '../../components/counter/Counter'
import Icon from '../../assets/icon.png'
import Hand from '../../assets/hand.png'
import List from '../../components/flatList/FlatList'
import Large from '../../components/largeList/LargeList'
import image from '../../assets/Background1st.png'
import { styles } from './HomeStyle'
import { BackgroundImage } from '@rneui/base'
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../responsiveness/Responsiveness'
const Home = ({ navigation }) => {
    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <ScrollView style={styles.container}>

                <BackgroundImage source={image}>


                    <TouchableOpacity onPress={() => navigation.navigate('TicketList')}>

                        <Image source={Icon} style={styles.img} />
                    </TouchableOpacity>
                    <View style={styles.first}>
                        <Text style={styles.hett} >Mau pergi ke
                            mana kali ini?</Text>
                        <Text>

                        </Text>
                        <Image source={Hand} style={{ width: widthPixel(100), height: heightPixel(150), }} />
                    </View>
                    <View style={styles.border}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: pixelSizeHorizontal(16), marginTop: pixelSizeVertical(14) }}>
                            <Text style={{ color: '#2D9CDB', fontFamily: 'PlusJakartaSans-Bold', fontSize: fontPixel(10) }}>Keberangkatan</Text>
                            <Text style={{ color: '#2D9CDB', fontFamily: 'PlusJakartaSans-Bold', fontSize: fontPixel(10) }}>Tujuan</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: pixelSizeHorizontal(16), marginTop: pixelSizeVertical(8) }}>
                            <Text style={{ color: '#59597C', fontSize: fontPixel(14), fontFamily: 'PlusJakartaSans-Bold' }}>PWT</Text>
                            <Image source={require('../../assets/mdi.png')} style={{ width: widthPixel(18), height: heightPixel(14), marginTop: pixelSizeVertical(8) }} />
                            <Text style={{ color: '#59597C', fontSize: fontPixel(14), fontFamily: 'PlusJakartaSans-Bold' }}>SLO</Text>
                        </View>
                        <View style={{ gap: 16 }}>

                            <View style={{ display: 'flex', flexDirection: 'row', marginHorizontal: pixelSizeHorizontal(16), justifyContent: 'space-between', marginTop: pixelSizeVertical(5), }}>
                                <Text style={{ fontSize: fontPixel(10), color: '#88879C', fontFamily: 'PlusJakartaSans-Regular' }}>Stasiun Purwokerto</Text>

                                <Text style={{ fontSize: fontPixel(10), color: '#88879C', fontFamily: 'PlusJakartaSans-Regular' }}>Stasiun Solo Balapan</Text>

                            </View>
                            <View style={{ marginHorizontal: pixelSizeHorizontal(16), borderBottomWidth: 1, borderColor: '#F2F2F2' }}>

                            </View>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: pixelSizeHorizontal(16), }}>
                            <View style={{ gap: 4 }}>
                                <Text style={{ fontSize: fontPixel(10), fontFamily: 'PlusJakartaSans-Bold', color: '#2D9CDB', marginTop: pixelSizeVertical(14) }}>Tanggal keberangkatan</Text>
                                <Text style={{ color: '#59597C', fontSize: fontPixel(14), fontFamily: 'PlusJakartaSans-Bold' }}>Rabu, 12 Agustus 2020</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: pixelSizeVertical(14) }}>

                                <View >

                                    <CardItem />
                                </View>


                                <Text style={{ color: '#59597C', fontSize: fontPixel(14), fontFamily: 'PlusJakartaSans-Bold', marginTop: pixelSizeVertical(11) }}>Pulang pergi</Text>

                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: pixelSizeHorizontal(16), marginTop: pixelSizeVertical(10), }}>

                            <View style={{ display: 'flex', gap: 5 }}>
                                <Text style={{ color: '#2D9CDB', fontSize: fontPixel(10), fontFamily: 'PlusJakartaSans-Bold' }}>Jumlah penumpang</Text>
                                <Counter />
                            </View>
                            <View>
                                <TouchableOpacity style={[{ backgroundColor: '#F8862A', width: widthPixel(128), height: heightPixel(40), borderRadius: 8, justifyContent: 'center' }, styles.cari]} onPress={() => navigation.navigate('TicketList')}>
                                    <Text style={{ fontSize: fontPixel(12), fontFamily: 'PlusJakartaSans-Bold', color: 'white', textAlign: 'center' }}>CARI TIKET</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                    <View>
                        <Text style={{ color: '#333E63', fontFamily: 'PlusJakartaSans-Bold', marginTop: pixelSizeVertical(24), marginLeft: pixelSizeHorizontal(32), fontSize: fontPixel(15) }}>Tiket saya</Text>
                    </View>
                    <List />
                    <View>
                        <Text style={{ color: '#333E63', fontFamily: 'PlusJakartaSans-Bold', fontSize: fontPixel(15), marginTop: pixelSizeVertical(24), marginLeft: pixelSizeHorizontal(32) }}>Berita</Text>
                    </View>
                    <Large />

                </BackgroundImage>
            </ScrollView>

        </>
    )
}
export default Home



