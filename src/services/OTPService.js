import axios from 'axios'

const OTPService = (props) => {

    url = 'http://127.0.0.1/otp'
    config = {
        "uid": props.uid
    }

    axios.post(url, config)
        // res - txnId, ret: "y" or "n"
        .then((res) => console.log(res))

        .catch((e) => console.log(e))
}

export default OTPService;