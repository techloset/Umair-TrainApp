import { StyleSheet } from "react-native"
import { pixelSizeHorizontal, pixelSizeVertical } from "../../responsiveness/Responsiveness"
export const styles = StyleSheet.create({
    Hello: {
        display: 'flex',

        flexDirection: 'row',
        gap: 20,
        marginLeft: pixelSizeHorizontal(26),
        marginTop: pixelSizeVertical(58)


    },

})