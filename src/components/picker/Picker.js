import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, BackgroundColor } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../../responsiveness/Responsiveness";


const PickerList = () => {
    const [selectedValue, setSelectedValue] = useState("Paspor");

    return (
        <>
            <View style={styles.container}>

                <Pressable onPress={() => setSelectedValue(!selectedValue)}>
                    <View style={[{ borderBottomColor: !selectedValue ? '#9F9FB9' : '#85D3FF' }, styles.box]}>
                        <Picker
                            selectedValue={selectedValue}

                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Paspor" value="Paspor" />
                            <Picker.Item label="Java" value="Java" />
                            <Picker.Item label="CSS" value="CSS" />
                        </Picker>
                    </View >
                </Pressable>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',







    },
    box: {
        borderBottomWidth: 2,
        width: widthPixel(150),


        backgroundColor: '#F0F9FE',
        height: heightPixel(40),



    }

});

export default PickerList;