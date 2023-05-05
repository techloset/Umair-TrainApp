
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const Accordion = ({ title, content }) => {
//     const [expanded, setExpanded] = useState(false);

//     return (
//         <View>
//             <TouchableOpacity onPress={() => setExpanded(!expanded)} >
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <Image source={require('../../assets/up.png')} />
//                     <Text>{title}</Text>

//                 </View>
//             </TouchableOpacity>
//             {expanded && (
//                 <View>
//                     <Text>{content}</Text>
//                 </View>
//             )}
//         </View>
//     );
// };

// export default Accordion;



// import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
// import React, { useState, useRef } from 'react'
// import Icon from 'react-native-vector-icons/MaterialIcons'

// const CustomDropDown = ({ title, textBody }) => {
//     const [content, setContent] = useState(false)
//     const animationController = useRef(new Animated.Value({ Value: 0 })).current;
//     const toggleListItem = () => {
//         const config = {
//             duration: 300,
//             toValue: setContent ? 1 : 2,
//             useNativeDriver: true
//         }
//         Animated.timing(animationController, config)
//     }
//     const arrowTransform = animationController.interpolate({
//         config: {
//             inputRange: [1, 2],
//             outputRange: ['0deg', '90deg']

//         }
//     })
//     return (
//         <View style={styles.container}>
//             <TouchableOpacity onPress={() => setContent(!content)}>
//                 <View>
//                     <Text>{title}</Text>
//                     <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>

//                         <Icon name={'keyboard-arrow-right'} />
//                     </Animated.View>
//                 </View>
//             </TouchableOpacity>
//             {content &&
//                 <View>
//                     <Text>{textBody}</Text>
//                 </View>
//             }

//         </View>
//     )
// }

// export default CustomDropDown;

// const styles = StyleSheet.create({})


import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { color } from '@rneui/base'

import ArrowList from './Accordian'
import { Item } from 'react-native-paper/lib/typescript/src/components/Drawer/Drawer'
import PickerList from '../picker/Picker'


const CardList = ({ title, textBody }) => {
    const [content, setContent] = useState(false)

    return (
        <View style={{ backgroundColor: 'white', marginHorizontal: 16 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16, marginTop: 11, marginBottom: 13 }}>

                <View style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>

                    <View style={styles.cirle}>
                        <Image source={require('../../assets/happyFace.png')} style={{ width: 20, height: 20 }} />
                    </View>

                    <Text style={{ color: '#333E63', fontSize: 14, fontFamily: 'PlusJakartaSans-Bold', }}>Penumpang 1</Text>

                </View>

                <TouchableOpacity onPress={() => setContent(!content)} style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                    {content ? <Image source={require('../../assets/down.png')} style={{ width: 9, height: 6 }} /> : <Image source={require('../../assets/up.png')} style={{ width: 9, height: 6 }} />}

                </TouchableOpacity>

            </View>

            <View>
                {
                    !content &&
                    <View>
                        <View style={{ borderTopWidth: 1, borderColor: '#333E63' }}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 16 }}>

                                <View style={{ gap: 8 }}>
                                    <Text style={{ color: '#88879C', fontSize: 10, fontFamily: 'PlusJakartaSans-Bold', }}>Jenis Identitas</Text>
                                    <PickerList />
                                </View>
                                <View >
                                    <Text style={{ color: '#88879C', fontSize: 10, fontFamily: 'PlusJakartaSans-Bold', marginBottom: 8 }}>Nomor identitas</Text>
                                    <View style={{ backgroundColor: '#F4F7F9', width: 150, height: 38, borderBottomWidth: 2, borderColor: '#9F9FB9', justifyContent: 'center' }}>
                                        <Text style={{ color: '#59597C', fontSize: 12, fontFamily: 'PlusJakartaSans-Regular', paddingLeft: 10 }}>A 38910381</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: '#88879C', fontSize: 10, fontFamily: 'PlusJakartaSans-Bold', marginHorizontal: 16, marginTop: 24, marginBottom: 10 }}>Nama lengkap</Text>
                                <View style={{ backgroundColor: '#F8F8F9', height: 34, marginHorizontal: 16, borderBottomWidth: 2, borderBottomColor: '#9F9FB9' }}>
                                    <Text style={{ color: '#59597C', fontSize: 12, fontFamily: 'PlusJakartaSans-Regular', padding: 8 }}>Ibnu Batutah</Text>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 16, marginTop: 12 }}>
                                <Text style={{ color: '#88879C', fontSize: 10, fontFamily: 'PlusJakartaSans-Regular', }}>Penumpang bayi tidak mendapat kursi sendiri. Penumpang dibawah 18 tahun dapat mengisi dengan nomor tanda pengenal lain atau tanggal lahir (ddmmyyyy)</Text>
                            </View>


                        </View>
                    </View>
                }

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