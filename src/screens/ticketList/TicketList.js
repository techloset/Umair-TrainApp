import { Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './TicketListStyle'
import DateList from '../../components/dateList/DateList'
import FairList from '../../components/fairList/FairList'
import Button from '../../components/button/Button'
import LinearGradient from 'react-native-linear-gradient'




const TicketList = ({ navigation }) => {
    return (
        <>
            <View style={{ flex: 1, }}>
                {/* <ScrollView style={{ backgroundColor: 'red', }}> */}


                <View style={{ flex: 1 }}>
                    <ImageBackground source={require('../../assets/BackGround2nd.png')}>

                        <View style={styles.Hello}>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>

                                <Image source={require('../../assets/LeftArrow.png')} style={{ width: 16, height: 13, marginTop: 8 }} />
                            </TouchableOpacity>
                            <Text style={{ color: '#333E63', fontSize: 18, fontFamily: 'PlusJakartaSans-Bold', }}>Purwokerto - Solo Balapan</Text>
                        </View>


                        <DateList />
                        <FairList />
                    </ImageBackground>
                </View>






                {/* </ScrollView> */}

                <LinearGradient colors={['#FFFFFF80', '#FFFFFF00']} style={{ height: 97, backgroundColor: '#FFFFFF80', borderBottomRightRadius: 16, borderBottomLeftRadius: 16, opacity: 50 }}>

                    <Button />
                </LinearGradient>
            </View>
        </>
    )
}

export default TicketList

