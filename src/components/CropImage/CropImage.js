import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { ImageCrop } from 'react-native-image-cropper'

const CropImage = ({ uri }) => {
    const cropperRef = useRef();
    const [height, setHeight] = useState()
    const [width, setWidth] = useState()
    const [zoom, setZoom] = useState()

    const capture = () => {
        cropperRef.current.crop()
            .then(base64 => console.log(base64))
    }
    return (
        <View>
            <ImageCrop
                ref={cropperRef}
                image={uri}
                cropHeight={height}
                cropWidth={width}
                zoom={zoom}
                maxZoom={80}
                minZoom={20}
                panToMove={true}
                pinchToZoom={true}
            />
            <Text onPress={capture()}>Done</Text>
        </View>

    )
}

export default CropImage