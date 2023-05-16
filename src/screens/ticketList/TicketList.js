import { Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, blurRadius } from 'react-native'
import React from 'react'
import { styles } from './TicketListStyle'
import DateList from '../../components/dateList/DateList'
import FairList from '../../components/fairList/FairList'
import Button from '../../components/button/Button'
import { BlurView } from "@react-native-community/blur";
const TicketList = ({ navigation }) => {
    return (
        <>
            <View style={{ flex: 1, }}>
                <View style={{ flex: 8 }}>
                    <ImageBackground source={require('../../assets/BackGround2nd.png')}>
                        <ImageBackground source={require('../../assets/Rectangle.png')}>


                            <View style={styles.Hello}>
                                <TouchableOpacity onPress={() => navigation.navigate('Home')}>

                                    <Image source={require('../../assets/LeftArrow.png')} style={{ width: 16, height: 13, marginTop: 8 }} />
                                </TouchableOpacity>
                                <Text style={{ color: '#333E63', fontSize: 18, fontFamily: 'PlusJakartaSans-Bold', }}>Purwokerto - Solo Balapan</Text>
                            </View>


                            <DateList />
                        </ImageBackground>
                        <FairList />
                    </ImageBackground>
                </View>
                <BlurView blurType="light"
                    blurAmount={10}
                    style={{ flex: 1 }}
                    overlayColor='transparent'
                    reducedTransparencyFallbackColor="white" >

                    <Button />

                </BlurView>
            </View>
        </>
    )
}

export default TicketList


