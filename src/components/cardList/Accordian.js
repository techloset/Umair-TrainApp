import React from 'react';
import {

    View,
    FlatList,

    StyleSheet,

    StatusBar,
} from 'react-native';
import CustomDropDown from './CardList';
import { fontPixel, pixelSizeHorizontal, pixelSizeVertical } from '../../responsiveness/Responsiveness';

const DATA = [
    {
        id: 1,

    },

];



const ArrowList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <CustomDropDown title={item.title} textBody={item.textBody} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: pixelSizeHorizontal(20),
        marginVertical: pixelSizeVertical(8),
        marginHorizontal: pixelSizeHorizontal(16),
    },
    title: {
        fontSize: fontPixel(32),
    },
});

export default ArrowList;