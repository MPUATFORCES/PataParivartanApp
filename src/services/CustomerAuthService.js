import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
const API_URL = 'http://20.204.96.107'

const CustomerAuthService = (uid, txnId, otp) => {

    url = `${API_URL}/authenticate`
    config = {
        "uid": uid,
        "txnId": txnId,
        "otp": otp
    }

    axios.post(url, config)
        // res - {
        //     "status": "y",
        //     "errCode": null
        //    }
        .then((res) => console.log(res))

        .catch((e) => console.log(e))
}

export default CustomerAuthService