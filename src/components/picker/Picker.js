import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, BackgroundColor } from "react-native";
import { Picker } from '@react-native-picker/picker';


const PickerList = () => {
    const [selectedValue, setSelectedValue] = useState("Paspor");

    return (
        <>
            <View style={styles.container}>

                <Pressable onPress={() => setSelectedValue(!selectedValue)}>
                    <View style={[{ borderBottomColor: !selectedValue ? '#9F9FB9' : '#85D3FF' }, styles.box]}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ paddingBottom: 10, marginBottom: -9, marginTop: -8 }}
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

        width: 150,





        backgroundColor: '#F0F9FE'




    },
    box: {
        borderBottomWidth: 2
    }

});

export default PickerList;