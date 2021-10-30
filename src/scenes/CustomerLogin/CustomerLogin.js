import React, { useState, useEffect } from "react"
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'


import OTPService from "../../services/OTPService/OTPService"
import { YELLOW, WHITE, RED } from '../../utils/Colors'


const CustomerLogin = () => {
    const [uidno, onUIDNoChange] = useState();
    const [otp, onOTPChange] = useState();

    useEffect(() => {

    })
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    onChangeText={onUIDNoChange}
                    value={uidno}
                    placeholder="UID Number"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onOTPChange}
                    secureTextEntry={true}
                    value={otp}

                    placeholder="OTP"
                />
                <TouchableOpacity
                    onPress={() => checkInput}
                    style={styles.button}
                >
                    <Text
                        style=
                        {
                            {
                                color: WHITE
                            }
                        }>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomerLogin


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: YELLOW,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    logo: {
        width: 60,
        height: 60,
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        width: 240,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 50,
        padding: 13,
        backgroundColor: WHITE,
        borderColor: 'transparent',
        textAlign: 'center'
    },
    button: {
        backgroundColor: RED,
        borderRadius: 30,
        color: WHITE,
        padding: 10,
        width: 120,
        fontWeight: 'bold',
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})