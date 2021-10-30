import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CameraView from '../../components/CameraView/CameraView';
import DropDown from '../../components/DropDown/DropDown';
import { YELLOW, WHITE, RED } from '../../utils/Colors'

const styles = StyleSheet.create({
    containerOuter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%',
        padding: 6,
        backgroundColor: YELLOW
    },
    image: {
        height: 40,
        width: 50
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: RED
    },
    containerBox: {
        backgroundColor: WHITE,
        borderRadius: 10,
        width: 300,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    containerOne: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    containerTwo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    button: {
        backgroundColor: RED,
        borderRadius: 30,
        color: WHITE,
        padding: 10,
        width: 150,
        fontWeight: 'bold',
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const SelectProofOfAddress = ({ navigation }) => {
    return (
        <View style={styles.containerOuter}>
            <Image
                source={require('../../../assets/images/icons/document.png')}
                style={styles.image}
            />
            <View style={styles.containerBox}>
                <View style={styles.containerTwo}>
                    <Text style={styles.headerText}>
                        Type of Proof
                    </Text>
                    <DropDown />
                </View>
                <View style={styles.containerTwo}>
                    <CameraView />
                </View>
            </View>
            {/* <TouchableOpacity
                onPress={() => navigation.navigate("Edit Address")}
                style={styles.button}
            >
                <Text
                    style=
                    {
                        {
                            color: WHITE
                        }
                    }>
                    Edit Address
                </Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default SelectProofOfAddress
