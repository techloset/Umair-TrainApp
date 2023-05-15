import { Text, Image, View, Pressable, Button, FlatList, StatusBar, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import CardItem from '../../components/cardItem/CardItem'
import Counter from '../../components/counter/Counter'
import Icon from '../../assets/icon.png'
import Hand from '../../assets/hand.png'
import List from '../../components/flatList/FlatList'
import Large from '../../components/largeList/LargeList'
import image from '../../assets/Background.png'
import { styles } from './HomeStyle'
import { BackgroundImage } from '@rneui/base'
const Home = ({ navigation }) => {
    return (
        <>
            <ScrollView style={styles.container}>
                <BackgroundImage source={image}>

                    <TouchableOpacity onPress={() => navigation.navigate('TicketList')}>

                        <Image source={Icon} style={styles.img} />
                    </TouchableOpacity>
                    <View style={styles.first}>
                        <Text style={{ fontFamily: 'PlusJakartaSans-Bold', fontSize: 24, width: 164, lineHeight: 32, marginTop: 44, color: '#59597C' }} >Mau pergi ke
                            mana kali ini?</Text>
                        <Image source={Hand} style={{ width: 100, height: 150, }} />
                    </View>
                    <View style={styles.border}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 22 }}>
                            <Text style={{ color: '#2D9CDB', fontFamily: 'PlusJakartaSans-Bold', fontSize: 10 }}>Keberangkatan</Text>
                            <Text style={{ color: '#2D9CDB', fontFamily: 'PlusJakartaSans-Bold', fontSize: 10 }}>Tujuan</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 8 }}>
                            <Text style={{ color: '#59597C', fontSize: 14, fontFamily: 'PlusJakartaSans-Bold' }}>PWT</Text>
                            <Image source={require('../../assets/arrow.png')} style={{ width: 18, height: 14, marginTop: 8 }} />
                            <Text style={{ color: '#59597C', fontSize: 14, fontFamily: 'PlusJakartaSans-Bold' }}>SLO</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginHorizontal: 16, justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={{ fontSize: 10, color: '#88879C', fontFamily: 'PlusJakartaSans-Regular' }}>Stasiun Purwokerto</Text>
                            <Text style={{ fontSize: 10, color: '#88879C', fontFamily: 'PlusJakartaSans-Regular' }}>Stasiun Solo Balapan</Text>
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 16, }}>
                            <Image source={require('../../assets/line.png')} style={{ width: 320 }} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, }}>
                            <View style={{ gap: 4 }}>
                                <Text style={{ fontSize: 10, fontFamily: 'PlusJakartaSans-Bold', color: '#2D9CDB', marginTop: 14 }}>Tanggal keberangkatan</Text>
                                <Text style={{ color: '#59597C', fontSize: 14, fontFamily: 'PlusJakartaSans-Bold' }}>Rabu, 12 Agustus 2020</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>

                                <View>

                                    <CardItem />
                                </View>


                                <Text style={{ color: '#59597C', fontSize: 10, fontFamily: 'PlusJakartaSans-Bold', marginTop: 18 }}>Pulang pergi</Text>

                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 14 }}>

                            <View style={{ display: 'flex', gap: 5 }}>
                                <Text style={{ color: '#2D9CDB', fontSize: 10, fontFamily: 'PlusJakartaSans-Bold' }}>Jumlah penumpang</Text>
                                <Counter />
                            </View>
                            <View>
                                <TouchableOpacity style={[{ backgroundColor: '#F8862A', width: 128, height: 40, borderRadius: 8, justifyContent: 'center' }, styles.cari]} onPress={() => navigation.navigate('TicketList')}>
                                    <Text style={{ fontSize: 12, fontFamily: 'PlusJakartaSans-Bold', color: 'white', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'auto', marginBottom: 4 }}>CARI TIKET</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                    <View>
                        <Text style={{ color: '#333E63', fontFamily: 'PlusJakartaSans-Bold', marginTop: 24, marginLeft: 32, fontSize: 15 }}>Tiket saya</Text>
                    </View>
                    <List />
                    <View>
                        <Text style={{ color: '#333E63', fontFamily: 'PlusJakartaSans-Bold', fontSize: 15, marginTop: 24, marginLeft: 32 }}>Berita</Text>
                    </View>
                    <Large />

                </BackgroundImage>
            </ScrollView>

        </>
    )
}
export default Home

