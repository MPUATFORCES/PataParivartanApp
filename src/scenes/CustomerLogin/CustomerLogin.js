import React, { useState, useEffect } from "react"
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from 'react-native'
import Loader from "../../utils/Spinners"

import axios from "axios"

// import OTPService from "../../services/OTPService"
import { YELLOW, WHITE, RED } from '../../utils/Colors'


const CustomerLogin = () => {

    const [uidno, onUIDNoChange] = useState();
    const [otp, onOTPChange] = useState();
    const [isLoading, setLoading] = useState(false);
    const [isOTPSent, onOTPSent] = useState(true);

    async function sendOTP(uid) {
        otpconfig = {
            "uid": uid
        }
        res = axios.post('http://20.204.96.107/otp', otpconfig)
            // res - {
            //     "status": "y",
            //     "errCode": null
            //    }
            .then((res) => console.log(res))
            .catch((e) => console.log(e))
        return res.data["status"]
    }

    async function sendAuth(uid, txnId, otp) {
        authconfig = {
            "uid": uid,
            "txnId": txnId,
            "otp": otp
        }

        res = axios.post('http://20.204.96.107/authenticate', authconfig)
            // res - {
            //     "status": "y",
            //     "errCode": null
            //    }
            .then((res) => console.log(res))
            .catch((e) => console.log(e))
        return res.data["status"]

    }

    const checkUIDInput = () => {
        if (!uidno) {
            alert('Enter UID No.')
        }
        else {
            setLoading(true)
            sendOTP(uidno)
        }
    }

    const checkOTPInput = () => {
        if (!otp) {
            alert('Enter OTP No.')
        }
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/images/icons/person.png')}
            />
            <View style={styles.form}>
                {isOTPSent ?
                    (
                        <View></View>
                    )
                    :
                    (<View style={styles.center}>
                        <View style={styles.columns}>
                            <Text style={styles.text}>Enter UID Number:</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onUIDNoChange}
                                value={uidno}
                                placeholder="UID Number"
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => checkUIDInput()}
                            style={styles.button}
                        >{isLoading ? (
                            <Loader />
                        )
                            :
                            (
                                <Text
                                    style=
                                    {
                                        {
                                            color: WHITE
                                        }
                                    }>
                                    Send OTP
                                </Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    )}


                {isOTPSent ?
                    (
                        <View style={styles.center}>
                            <View style={styles.columns}>
                                <Text style={styles.text}>Enter OTP Number:</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onOTPChange}
                                    secureTextEntry={true}
                                    value={otp}
                                    placeholder="OTP"
                                />
                            </View>
                            <TouchableOpacity
                                onPress={() => checkOTPInput()}
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
                    ) :
                    <View>

                    </View>
                }
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
    center: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    logo: {
        width: 80,
        height: 80,
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    columns: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    text: {
        color: RED,
        fontSize: 15,
        fontWeight: 'bold',
        width: 90
    },
    input: {
        height: 50,
        width: 200,
        margin: 10,
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
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 17
    }
})