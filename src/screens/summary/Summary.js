import { Text, View, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './SummaryStyle'
import SummaryList from '../../components/summaryList/SummaryList'

import ArmaniList from '../../components/armaniList/ArmaniList'
import LinearGradient from 'react-native-linear-gradient'

import Accordion from '../../components/cardList/CardList'
import MyComponent from '../../components/cardList/Accordian'
import CustomDropDown from '../../components/cardList/CardList'
import List from '../../components/cardList/Accordian'
import CardList from '../../components/cardList/CardList'
import ArrowList from '../../components/cardList/Accordian'

const Summary = ({ navigation }) => {
    return (



        <ImageBackground style={{ flex: 1, }} source={require('../../assets/Background3rd.png')}>

            <View style={{ flex: 1 }}>

                <View style={styles.Hello}>
                    <TouchableOpacity onPress={() => navigation.navigate('TicketList')}>

                        <Image source={require('../../assets/LeftArrow.png')} style={{ width: 16, height: 13, marginTop: 8 }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#333E63', fontSize: 18, fontFamily: 'PlusJakartaSans-Bold', }}>Ringkasan pemesanan</Text>
                </View>
                <SummaryList />
                <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginLeft: 18, gap: 10 }}>
                    <Image source={require('../../assets/heart.png')} style={{ width: 16, height: 13 }} />
                    <Text style={{ fontSize: 14, fontFamily: 'PlusJakartaSans-Bold', color: '#333E63' }}>Penumpang tersimpan</Text>
                </View>
                <ArmaniList />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 32 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 9, alignItems: 'center' }}>

                        <Image source={require('../../assets/detail.png')} style={{ width: 18, height: 14 }} />
                        <Text style={{ color: '#333E63', fontSize: 14, fontFamily: 'PlusJakartaSans-Bold', }}>Detail penumpang</Text>
                    </View>
                    <Text style={{ color: '#FE9B4B', fontSize: 10, fontFamily: 'PlusJakartaSans-Bold', }}>+  Tambah penumpang</Text>
                </View>

                <ArrowList />
            </View>
            <LinearGradient colors={['#FFFFFF80', '#FFFFFF00']} style={{ height: 97, backgroundColor: '#FFFFFF80', borderBottomRightRadius: 16, borderBottomLeftRadius: 16, opacity: 50 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10, marginHorizontal: 16, marginTop: 12 }}>
                    <TouchableOpacity style={{ height: 45, borderRadius: 45, justifyContent: 'center', backgroundColor: '#FFFFFF', alignItems: 'center', flex: 1 }}>
                        <Text style={{ color: '#88879C', fontSize: 12, fontFamily: 'PlusJakartaSans-Bold', }}>PILIH KURSI</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ChairSelection')} style={{ backgroundColor: '#F8872C', height: 45, borderRadius: 45, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Text style={{ color: 'white', fontSize: 12, fontFamily: 'PlusJakartaSans-Bold', }}>LANJUT</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </ImageBackground>


    )
}

export default Summary

