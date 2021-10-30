import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, Modal, Pressable, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { YELLOW, WHITE, RED } from '../../utils/Colors'


const CameraView = ({ navigation }) => {
    const cameraRef = useRef();
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const camera = cameraRef.current;
        console.log(camera); // logs <div>I'm an element</div>
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const snap = async () => {
        if (cameraRef) {
            cameraRef.current.takePictureAsync()
                .then((photo) => {
                    navigation.navigate("Edit Image", uri = photo.uri)
                })
                .catch((e) => {
                    console.log(e)
                })

        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Pressable
                                style={{ left: 120 }}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Image
                                    source={require('../../../assets/images/icons/close.png')}
                                    style={styles.closeIcon}
                                />
                            </Pressable>
                            <Camera style={styles.camera} type={type} ref={cameraRef}>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity

                                        onPress={() => {
                                            setType(
                                                type === Camera.Constants.Type.back
                                                    ? Camera.Constants.Type.front
                                                    : Camera.Constants.Type.back
                                            );
                                        }}>
                                        <Image
                                            source={require('../../../assets/images/icons/rotatecamera.png')}
                                            style={styles.flipIcon}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </Camera>

                            <Pressable
                                onPress={() => snap()}
                            >
                                <Image
                                    source={require('../../../assets/images/icons/capture.png')}
                                    style={styles.captureIcon}
                                />
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Next</Text>
                </Pressable>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    camera: {
        maxWidth: 500,
        maxHeight: 500,
        height: 340,
        width: 280,
        padding: 7,
        margin: 15
    },
    buttonContainer: {

    },
    flipIcon: {
        width: 30,
        height: 30
    },
    captureIcon: {
        width: 45,
        height: 45
    },
    closeIcon: {
        width: 25,
        height: 25,
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
    centeredView: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 180,
        width: 300,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: RED,
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})

export default CameraView