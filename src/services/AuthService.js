import axios from 'axios'

const AuthService = (props) => {

    url = 'http://127.0.0.1/otp'
    config = {
        "uid": props.uid,
        "txnId": props.txnId,
        "otp": props.otp
    }

    axios.post(url, config)
        // res - status: "y"/"n" , errCode: null/errorcode 
        .then((res) => console.log(res))

        .catch((e) => console.log(e))
}

export default AuthService;

// {
//     "uid": "********9999",
//     "txnId": "0acbaa8b-b3ae-433d-a5d2-51250ea8e970",
//     "otp": "122915"
//    }

// {
//     "status": "y",
//     "errCode": null
//    }