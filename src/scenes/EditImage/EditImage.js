import React from 'react'
import { View } from 'react-native'
import CropImage from '../../components/CropImage/CropImage'

const EditImage = ({ uri }) => {
    return (
        <View>
            <CropImage uri={uri} />
        </View>
    )
}

export default EditImage
