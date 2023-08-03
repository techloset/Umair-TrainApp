import { StyleSheet } from "react-native"
import {
    fontPixel, widthPixel, pixelSizeVertical,
    heightPixel,


    pixelSizeHorizontal,
} from "../../../src/responsiveness/Responsiveness"
export const styles = StyleSheet.create({
    img: {

        width: widthPixel(16),
        height: heightPixel(18),
        marginTop: pixelSizeVertical(55),

        marginLeft: pixelSizeHorizontal(35)


    }
    ,
    container: {


    },
    first: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: pixelSizeHorizontal(50),
        marginLeft: pixelSizeHorizontal(32),



    },
    border: {


        height: heightPixel(229),
        backgroundColor: '#FAFCFE',

        marginLeft: pixelSizeHorizontal(8),

        display: 'flex'
        ,


        width: '92%',

        borderRadius: 8,
        shadowColor: "#1582BF",

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 3


    },
    cari: {
        shadowColor: "#F2994A",
        shadowOffset: {
            width: 0,
            height: 13,
        },
        shadowOpacity: 0.24,
        shadowRadius: 14.86,
        elevation: 18
    },
    hett: { fontFamily: 'PlusJakartaSans-Bold', fontSize: fontPixel(24), width: widthPixel(164), lineHeight: pixelSizeVertical(32), marginTop: pixelSizeVertical(40), color: '#59597C' }
})