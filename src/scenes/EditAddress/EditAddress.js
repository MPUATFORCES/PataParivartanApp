import React, { useState } from "react"
import {
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    View,
    ScrollView,
    Pressable
} from 'react-native'
import EditAddressModal from "../../components/EditAddressModal/EditAdressModal";
import { YELLOW, RED, WHITE } from "../../utils/Colors";

const EditAddress = ({ navigation }) => {
    const Address = {
        houseno: "",
        streetno: "",
        area: "",
        landmark: "",
        village: "",
        subdistrict: "",
        district: "",
        state: "",
        pin: "",
    }

    const onConfirmPress = () => {
        alert('Done')
    }

    const checkInput = () => {
        if (Address.houseno) {
            alert('Please Enter House Number');
            return;
        }
        if (Address.streetno) {
            alert('Please Enter Street Number');
            return;
        }
        if (Address.area) {
            alert('Please Enter Area');
            return;
        }
        if (Address.landmark) {
            alert('Please Enter Landmark');
            return;
        }
        if (Address.village) {
            alert('Please Enter Village');
            return;
        }
        if (Address.subdistrict) {
            alert('Please Enter Sub District');
            return;
        }
        if (Address.district) {
            alert('Please Enter District');
            return;
        }
        if (Address.state) {
            alert('Please Enter State');
            return;
        }
        if (Address.pin) {
            alert('Please Enter PinCode');
            return;
        }

    };

    const [text, onChangeText] = useState(Address);

    return (
        <ScrollView>
            <SafeAreaView style={[styles.container, styles.center]}>
                <View style={styles.columns}>
                    <Text style={styles.text}>House/Building/Apartment:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text.houseno}
                        placeholder="Enter your House"
                    />
                </View>
                <View style={styles.columns}>
                    <Text style={styles.text}>Street/Road/Lane:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text.streetno}
                        placeholder="Enter your Street"
                    /></View>
                <View style={styles.columns}>
                    <Text style={styles.text}>Area/Locality/Sector:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text.area}
                        placeholder="Enter your Area"
                    /></View>
                <View style={styles.columns}>
                    <Text style={styles.text}>Landmark:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text.landmark}
                        placeholder="Enter your Landmark"
                    /></View>
                <View style={styles.columns}>
                    <Text style={styles.text}>Village/Town/City:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text.village}
                        placeholder="Enter your Village"
                    /></View>
                <View style={styles.columns}>
                    <Text style={styles.text}>Sub District:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text.subdistrict}
                        placeholder="Enter your Sub District"
                    /></View>
                <View style={styles.columns}>
                    <Text style={styles.text}>District:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text.district}
                        placeholder="Enter your District"
                    /></View>
                <View style={styles.columns}>
                    <Text style={styles.text}>State:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text.state}
                        placeholder="Enter your State"

                    />
                </View>
                <View style={styles.columns}>
                    <Text style={styles.text}>PIN</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value="110034"
                        placeholder="Enter your Pin"

                    />
                </View>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => onConfirmPress()}
                >
                    <Text style={styles.textStyle}>Confirm</Text>
                </Pressable>

                {/* <EditAddressModal navigation={navigation} /> */}
            </SafeAreaView>
        </ScrollView>
    )
}

export default EditAddress

const styles = StyleSheet.create({
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        height: 700,
        flexDirection: "column",
        backgroundColor: YELLOW
    },
    columns: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    input: {
        height: 50,
        margin: 6,
        borderWidth: 1,
        padding: 14,
        borderColor: 'transparent',
        backgroundColor: 'white',
        borderRadius: 18,
        textAlign: 'center'
    },
    text: {
        color: RED,
        fontSize: 15,
        fontWeight: 'bold'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16
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
    },
    buttonOpen: {
        backgroundColor: RED,
    },
});