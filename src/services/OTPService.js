import axios from 'axios'

const OTPService = (props) => {

    url = 'http://20.204.96.107/otp'
    config = {
        "uid": props.uid
    }

    axios.post(url, config)
        // res - txnId, ret: "y" or "n"
        .then((res) => res)

        .catch((e) => console.log(e))
}

export default OTPService;