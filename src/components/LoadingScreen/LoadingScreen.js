import React from 'react';
import { View, Image } from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import Logo from '../Logo/Logo';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: flex,
        justifyContent: center,
        alignItems: center
    },
    logo: {
        width: 100,
        height: 60,
    },
});

const LoadingScreen = () => {
    const [isReady, setReady] = useState(false);

    const _cacheResourcesAsync = async () => {
        const images = [require('./assets/favicon.png')];

        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync();
        });
        return Promise.all(cacheImages);
    }


    return (
        isReady === false ?
            console.log('Loading')
                (
                    <AppLoading
                        startAsync={_cacheResourcesAsync}
                        onFinish={() => setReady(true)}
                        onError={console.warn}
                    />) : (<View style={{ flex: 1 }}>
                        <Image source={require('.../../../assets/images/screens/drawable-hdpi/LoadingScreen.png')} />
                    </View>)
    )
}

export default LoadingScreen;