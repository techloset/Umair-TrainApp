import { View, Pressable, Text, StyleSheet } from 'react-native'
import { fontPixel, pixelSizeVertical } from '../../responsiveness/Responsiveness'
const Besok = (props) => {
    return (

        <View style={styles.shadow}>
            <Pressable style={props.style}>
                <Text style={[props.style, { fontSize: fontPixel(10), fontFamily: 'PlusJakartaSans-Bold' }]}>{props.name}</Text>
            </Pressable>
        </View>
    )

}
const styles = StyleSheet.create({
    box: {

        fontSize: fontPixel(12), fontFamily: 'PlusJakartaSans-Bold',
        alignSelf: 'center', marginBottom: pixelSizeVertical(4)
    }

})
export default Besok