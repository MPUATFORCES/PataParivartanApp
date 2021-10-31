import * as Progress from 'react-native-progress';
import React from 'react';
const Loader = () => {
    return (
        <Progress.CircleSnail color={'yellow'} duration={2000} spinDuration={5000} />
    )
}

export default Loader