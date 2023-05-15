import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    image
} from 'react-native';
import Calling from './Calling';
import Hello from './Image'
const Large = () => {

    const DATA = [
        {
            id: '1',
            title: 'Tetap jaga komunikasi selama di kereta',

            tips: <Calling text='Tips' color='#85D3FF' backgroundColor="#E0F3FF" borderRadius={4} paddingHorizontal={8} paddingVertical={4} />,
            hello: <Hello image={require('../../assets/Berita.png')} width={135} height={120} />
        },

        {
            id: '2',
            title: 'Protokol kesehatan di kereta',
            tips: <Calling text='Update' color='#FE9B4B' backgroundColor="#F4781433" borderRadius={4} paddingHorizontal={8} paddingVertical={4} />,
            hello: <Hello image={require('../../assets/good.png')} width={100} height={100} />
        },

    ];

    const Item = ({ title, tips, hello }) => (
        <View style={styles.item}>
            <View style={{ gap: 8 }}>

                <Text style={styles.tips}>{tips}</Text>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View>
                {hello}
            </View>


        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} tips={item.tips} hello={item.hello} />}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        width: 280,
        height: 171,
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        alignContent: 'center',
        alignItems: 'center'

    },
    title: {
        fontSize: 14,
        color: '#333E63',
        fontFamily: 'PlusJakartaSans-Bold',
        width: 114,
        height: 72,
        lineHeight: 24
    },
    tips: {
        fontSize: 36
    }
});

export default Large;